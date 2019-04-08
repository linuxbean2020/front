import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GearService } from '../gear.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'seafish-gear-search',
	templateUrl: './gear-search.component.html',
	styleUrls: ['./gear-search.component.css']
})
export class GearSearchComponent implements OnInit {

	public search: any = {
		keyword: '',
		type: 0,
		species: 0
	};

	public species:any[] = [];
	public records:any[] = [];

	@Output() triggerSearch = new EventEmitter<any>();

	constructor(public gearServ:GearService, private route:ActivatedRoute ) {
	}

	ngOnInit() {

		this.route.queryParams.subscribe(params => {		
			if (params.keyword) {
				this.search.keyword = params.keyword;	
			}
			
			if (params.type) {
				this.search.type = params.type;	
			}
			
			if (params.type) {
				this.search.species = params.species;	
			}

		});

		this.gearServ.getSpecies().subscribe(data=>{
			this.species = data;
		});		
	}

	doSearch() {
		this.triggerSearch.next(this.search);
	}	

}
