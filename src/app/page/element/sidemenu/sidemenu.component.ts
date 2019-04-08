import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

	@Input() public data: any = {};
	private selectedItem: string;
	private apiBase: string = environment.apiBase;

	constructor() {
		this.data.items = [];
	}

	ngOnInit() {
	}

	populate(data) {
		this.data = data;
		this.selectedItem = data.items[0].menu_item;
	}

	selected(menu_item) {
		return this.selectedItem == menu_item;
	}

	select(menu_item) {
		this.selectedItem = menu_item;
	}

}
