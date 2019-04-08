import { Component, OnInit } from '@angular/core';
import { PublicationsService } from './publications.service';
import { environment } from '../../environments/environment';

@Component({
	selector: 'seafish-page-publications',
	templateUrl: './publications.component.html',
	styleUrls: ['./publications.component.css']
})
export class PublicationsPageComponent implements OnInit {

	public cats: any[];
	public types: any[];
	public results: any[] = [];
	public noResults:number = 0;
	public page: number = 0;
	
	public search: any = {
		keyword: '',
		type: 0,
		cat: 0
	};
	public months: any = {
		1: 'January',
		2: 'February',
		3: 'March',
		4: 'April',
		5: 'May',
		6: 'June',
		7: 'July',
		8: 'August',
		9: 'September',
		10: 'October',
		11: 'November',
		12: 'December'
	};
	public apiBase: string = environment.apiBase;

	constructor(private pubServ:PublicationsService) { }

	ngOnInit() {
		this.pubServ.cats().subscribe(data=>{
			this.cats = data;
		});

		this.pubServ.types().subscribe(data=>{
			this.types = data;
		});

		this.doSearch();
		console.log(this.search.keyword)
	}

	doSearch() {
		this.pubServ.search(this.search,this.page).subscribe(data=>{
			if (this.page == 0) {
				this.noResults = data[0];
				this.results = data[1];
			} else {
				this.results = this.results.concat(data[1]);
			}
		})
	}

	filterKeyword() {
		this.page = 0;
		this.doSearch();
	}	

	filterCat(cat) {
		this.page = 0;
		this.search.cat = cat.Document_Category;
		this.doSearch();
	}

	resetCat() {
		this.page = 0;
		this.search.cat = 0;
		this.doSearch();
	}

	filterType(type) {
		this.page = 0;
		this.search.type = type.Media_Format_Type;
		this.doSearch();	
	}

	resetType() {
		this.page = 0;
		this.search.type = 0;
		this.doSearch();
	}

	loadMore() {
		this.page++;
		this.doSearch();
	}

}