import { Component, OnInit } from '@angular/core';
import { RassService } from '../rass.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import { tileLayer, latLng, marker, icon } from 'leaflet';
@Component({
    selector: 'seafish-rass-profile',
    templateUrl: './rass-profile.component.html',
    styleUrls: ['./rass-profile.component.css']
})
export class RassProfileComponent implements OnInit {

	public profile: any;
	private apiBase:string;
    public show_detail:any[] = [0,0,0,0];
    public map: any;

	constructor(public rassServ:RassService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
		this.apiBase = environment.apiBase;
	}

	ngOnInit() {
  		this.route.params.subscribe(params => {
  			this.rassServ.getProfile(params['id']).subscribe(profile=>{
  				this.profile = profile;

                var coords = JSON.parse(this.profile.coords);

                this.map = [];
                this.map['options'] = {
                    layers: [
                        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
                    ],
                    zoom: 2,
                    center: latLng(coords.lat, coords.lng)
                };

                this.map['layers'] = [
                    marker([ coords.lat, coords.lng ], {
                        icon: icon({
                            iconSize: [ 25, 41 ],
                            iconAnchor: [ 13, 41 ],
                            iconUrl: 'assets/marker-icon.png',
                            shadowUrl: 'assets/marker-shadow.png'
                       })
                    })
                ];
  			});
  		});
	}

    toggleDetail(num) {
        this.show_detail[num] = !this.show_detail[num];
    }

}