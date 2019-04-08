import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TessService } from '../tess-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'seafish-tess-search',
	templateUrl: './tess-search.component.html',
	styleUrls: ['./tess-search.component.css']
})
export class TessSearchComponent implements OnInit {

	public countries: any[];
	public steps: any[];
	public types: any[];
	public sectors: any[];
	@Input() public search: any;
	@Output() public goSearch = new EventEmitter<any>();

	public country: number = 0;

	constructor(public tessServ:TessService, private route: ActivatedRoute) {
		this.init();
	}

	init() {
		this.search = {
			keyword: '',
			country: 0,
			type: 0,
			sector: 0
		};
	}

	ngOnInit() {

		this.route.queryParams.subscribe(params => {		
			if (params.keyword) {
				this.search.keyword = params.keyword;	
			}
			
			if (params.country) {
				this.search.country = params.country;	
			}
			
			if (params.type) {
				this.search.type = params.type;	
			}
			
			if (params.sector) {
				this.search.sector = params.sector;	
			}

		});	

		console.log(this.search)

		this.tessServ.getList('countries').subscribe(data=>{
			this.countries = data;
		});		

		this.tessServ.getList('steps').subscribe(data=>{
			this.steps = data;
		});

		this.tessServ.getList('types').subscribe(data=>{
			this.types = data;
		});

		this.tessServ.getList('sectors').subscribe(data=>{
			this.sectors = data;
		});
	}
	
	doSearch() {
		this.goSearch.next(this.search);
	}

}
