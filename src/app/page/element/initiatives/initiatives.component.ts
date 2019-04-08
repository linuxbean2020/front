import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../page.service';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-initiatives',
	templateUrl: './initiatives.component.html',
	styleUrls: ['./initiatives.component.css']
})
export class InitiativesComponent implements OnInit {

	public initiatives: any[] = [];
	public apiBase: string = environment.apiBase;
	public cur: any;

	constructor(public pageServ:PageService) { }

	ngOnInit() {
		this.pageServ.getInitiatives().subscribe(data=>{
			this.initiatives = data;
		})
	}

	hover(item) {
		this.cur = item;
	}

	unhover() {
		this.cur = undefined;
	}

	getIm(item) {
		if (this.cur && this.cur.id == item.id) {
			return this.apiBase + 'file/' + item.image_colour;	
		} else {
			return this.apiBase + 'file/' + item.image_grey;
		}
	}

}
