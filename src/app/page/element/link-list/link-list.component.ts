import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../../content.service';

@Component({
	selector: 'seafish-link-list',
	templateUrl: './link-list.component.html',
	styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

	public data:any;
	@Input() public background:string = 'grad-blue';
	@Input() public side:string = '';

	constructor(private contServ:ContentService) { }

	ngOnInit() {
	}

	populate(data) {
		this.data = data;
	}

}
