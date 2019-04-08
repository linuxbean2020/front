import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../content.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { environment } from '../../../../environments/environment';

import * as L from 'leaflet';
import { tileLayer, latLng, marker, icon } from 'leaflet';

@Component({
	selector: 'seafish-latest-events',
	templateUrl: './latest-events.component.html',
	styleUrls: ['./latest-events.component.css']
})
export class LatestEventsComponent implements OnInit {

	public events:any[] = [];

	constructor(private content:ContentService) { }

	ngOnInit() {
		this.content.getUpcomingEvents(2).subscribe(data=>{
			console.log(data)
			data.map(event=>{

				if (event.featured_img) {
					event.imgUrl = environment.apiBase + 'file/' + event.featured_img;
				}

				if (event.postcode && event.postcode.length) {
					this.setMapOptions(event.postcode).then(data=>{
						event.map = data;
						this.events.push(event);
					});
				}
			});
		});
	}

    setMapOptions(pcd) {
    	var promise = new Promise((resolve, reject) => {
	        this.content.coordsForPcd(pcd).subscribe(data=>{

	        	let out = [];
	            out['options'] = {
	                layers: [
	                    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
	                ],
	                zoom: 15,
	                center: latLng(data.latitude, data.longitude)
	            };

	            out['layers'] = [
	                marker([ data.latitude, data.longitude ], {
	                    icon: icon({
	                        iconSize: [ 25, 41 ],
	                        iconAnchor: [ 13, 41 ],
	                        iconUrl: 'assets/marker-icon.png',
	                        shadowUrl: 'assets/marker-shadow.png'
	                   })
	                })
	            ];
	            resolve(out);
	        });
	    });
	    return promise;
    }	

}
