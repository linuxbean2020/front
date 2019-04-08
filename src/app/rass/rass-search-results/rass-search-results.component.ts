import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RassService } from '../rass.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'seafish-rass-search-results',
  templateUrl: './rass-search-results.component.html',
  styleUrls: ['./rass-search-results.component.css']
})
export class RassSearchResultsComponent implements OnInit {

	public results: any;
	public apiBase = environment.apiBase;	

	constructor(private route: ActivatedRoute, private rassServ:RassService) {
		this.init();
	}

	init() {
		this.results = [];
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
		this.rassServ.search(params).subscribe(results=>{
			this.results = results;
		});
	}

	doSearch(params) {
		this.rassServ.search(params).subscribe(results=>{
			this.results = results;
		});
	}

	getAll() {
		this.rassServ.getAll().subscribe(results=>{
			this.results = results;
		});
	}

}
