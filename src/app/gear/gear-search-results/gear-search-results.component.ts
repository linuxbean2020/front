import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GearService } from '../gear.service';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'seafish-gear-search-results',
	templateUrl: './gear-search-results.component.html',
	styleUrls: ['./gear-search-results.component.css']
})
export class GearSearchResultsComponent implements OnInit {

	public results: any;
	public apiBase = environment.apiBase;	

	constructor(private route: ActivatedRoute, private gearServ:GearService) {
		this.init();
	}

	init() {
		this.results = {
			gear: [],
			devices: [],
			docs: []
		};
	}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
  			if (params) {
  				if (params.type>0 || params.species>0 || params.keyword) {
  					this.doSearch(params);	
  				} else {
  					this.getAll();
  				}
  			}
		});
	}

	goSearch(params) {
		this.gearServ.search(params).subscribe(results=>{
			this.results = results;
		});
	}
	doSearch(params) {
		this.gearServ.search(params).subscribe(results=>{
			this.results = results;
			console.log(results)
		});
	}

	getAll() {
		this.gearServ.getAll().subscribe(results=>{
			this.results = results;
			console.log(results)
		});
	}

}
