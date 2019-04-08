import { Component, OnInit } from '@angular/core';
import { RfsService } from '../../rfs.service';

@Component({
	selector: 'seafish-rfs-quicksearch',
	templateUrl: './rfs-quicksearch.component.html',
	styleUrls: ['./rfs-quicksearch.component.css']
})
export class RfsQuicksearchComponent implements OnInit {

	public locations: any[];
	public species: any[];
	public search: any;

	constructor(public rfsServ:RfsService) {
		this.init();
	}

	init() {
		this.search = {
			name: undefined,
			number: undefined,
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
	}

}
