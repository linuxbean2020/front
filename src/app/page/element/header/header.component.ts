import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../content.service';
import { NavService } from '../../../nav.service';

@Component({
	selector: 'seafish-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public keyword: string;
	public results: any[] = [];
	public nav:any = {
		header: undefined
	};

	public navUp:boolean = false;
	public popularPot: any = [];
	public popular: any = [];
	public usefulPot: any = [];
	public useful: any = [];

	public prev_code = '';
	constructor(private contentServ:ContentService, private navServ:NavService) { }

	ngOnInit() {
		this.navServ.getNavLinks().subscribe(data=>{
			this.popularPot = data.popular;
			this.usefulPot = data.useful;
		});
	}

	search() {
		if (this.keyword.length>2) {
			this.contentServ.searchFull(this.keyword).subscribe(data=>{
				this.results = data;
			});
		} else {
			this.results = [];
		}
	}

	resetSearch() {
		this.results = [];
		this.keyword = undefined;
	}

	hover(code) {
		this.nav.header = code;
		this.navUp = true;
		this.popular = this.popularPot[code];
		this.useful = this.usefulPot[code];
	}

	leave() {
		this.navUp = false;
	}

	toggale(code){
		this.navUp = !this.navUp;
		if(code !== this.prev_code){
			this.navUp = true;
		}
		if ( this.navUp ) {
			this.prev_code = code;
			this.hover(code);
		}
	}

}
