import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RassService } from '../rass.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'seafish-rass-search',
  templateUrl: './rass-search.component.html',
  styleUrls: ['./rass-search.component.css']
})
export class RassSearchComponent implements OnInit {

	public search: any = {
		keyword: '',
		species: 0
	};

	public species:any[] = [];
	public records:any[] = [];

	@Output() triggerSearch = new EventEmitter<any>();

	constructor(public rassServ:RassService, private route:ActivatedRoute ) {
	}

	ngOnInit() {

		this.route.queryParams.subscribe(params => {		
			if (params.keyword) {
				this.search.keyword = params.keyword;	
			}
			
			if (params.species) {
				this.search.species = params.species;
			}

		});

		this.rassServ.getSpecies().subscribe(data=>{
			this.species = data;
		});
	}

	doSearch() {
		this.triggerSearch.next(this.search);
	}	

}
