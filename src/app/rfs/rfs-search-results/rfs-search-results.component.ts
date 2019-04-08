import { Component, OnInit } from '@angular/core';
import { RfsService } from '../rfs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'seafish-rfs-search-results',
	templateUrl: './rfs-search-results.component.html',
	styleUrls: ['./rfs-search-results.component.css']
})
export class RfsSearchResultsComponent implements OnInit {

	public locations: any[];
	public species: any[];
	public search: any;
	public results: any[];

	constructor(public rfsServ:RfsService, private route: ActivatedRoute) {
		this.init();
	}

	init() {
		this.search = {
			name: undefined,
			number: undefined,
			location: 0,
			species: 0
		};

		var alpha = false;
		this.route.params.subscribe(params => {
			if (params.alpha) {
				alpha = true;
				this.rfsServ.alphaSearch(params.alpha).subscribe(results=>{
					this.results = results;
				});
			}
			this.route.queryParams
	      		.subscribe(qparams => {		
	      			if (qparams && !alpha) {
	      				console.log(qparams)
	      				this.search = qparams;
	      				if (this.search.location>0 || this.search.name || this.search.number || this.search.species > 0) {
	      					this.doSearch();	
	      				} else {
	      					this.getAll();
	      				}
	      			}

	      		});
		});		
	}

	ngOnInit() {
		this.rfsServ.locations().subscribe(data=>{
			this.locations = data;
		});
		this.rfsServ.species().subscribe(data=>{
			this.species = data;
		});
	}

	triggerSearch(data) {
		this.search = data;
		this.doSearch();
	}

	doSearch() {
		this.rfsServ.search(this.search).subscribe(results=>{
			this.results = results;
		});
	}

	getAll() {
		this.rfsServ.getAll().subscribe(results=>{
			this.results = results;
		});	
	}
}