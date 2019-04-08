import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'seafish-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.css']
})
export class FeaturedItemsComponent implements OnInit {

	public data:any = [];
	public apiBase = environment.apiBase;

	constructor() { }

	ngOnInit() {

	}

	populate(data) {
		this.data = data;
	}

}
