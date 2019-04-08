import { Component, OnInit } from '@angular/core';
import { TessService } from '../tess-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'seafish-tess-search-results',
	templateUrl: './tess-search-results.component.html',
	styleUrls: ['./tess-search-results.component.css']
})
export class TessSearchResultsComponent implements OnInit {

	public results: any[] = [];
	public types: any = {};
	public locations: any = {};
	public sectors: any = {};

	constructor(public tessServ:TessService, private route: ActivatedRoute) {

		this.tessServ.getList('countries').subscribe(data=>{
			data.map(cur=>{
				this.locations[cur.id] = cur.name;
			});
		});

		this.tessServ.getList('types').subscribe(data=>{
			data.map(cur=>{
				this.types[cur.id] = cur.name;
			});
		});

		this.tessServ.getList('sectors').subscribe(data=>{
			data.map(cur=>{
				this.sectors[cur.id] = cur.name;
			});
		});		
	}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {		
			this.goSearch(params);
		});	
	}

	goSearch(params) {
		this.tessServ.search(params).subscribe(results=>{
			this.results = results;
		});
	}

}
