import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RfsService } from '../../rfs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'seafish-rfs-full-search',
	templateUrl: './rfs-full-search.component.html',
	styleUrls: ['./rfs-full-search.component.css']
})
export class RfsFullSearchComponent implements OnInit {

	public locations: any[];
	public species: any[];
	public search: any;
	@Output() triggerSearch = new EventEmitter<any>();

	constructor(public rfsServ:RfsService, private route: ActivatedRoute) {
		this.init();
	}

	init() {
		this.search = {
			name: '',
			number: '',
			location: 0,
			species: 0
		};
	}

	ngOnInit() {
		this.rfsServ.locations().subscribe(data=>{
			this.locations = data;
		});
		this.rfsServ.species().subscribe(data=>{
			this.species = data;
		});

		this.route.queryParams
  		.subscribe(params => {		
  			if (params) {
  				if (params.location) {
  					this.search.location = params.location;
  				}
  				if (params.name) {
  					this.search.name = params.name;
  				}
  				if (params.number) {
  					this.search.number = params.number;
  				}
  				if (params.species) {
  					this.search.species = params.species;
  				}  				  				  				
  			}
  		});

	}

	reset() {
		this.init();
	}

	doSearch() {
		this.triggerSearch.next(this.search);
	}

}
