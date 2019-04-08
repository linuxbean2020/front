import { Component, OnInit, ViewChild } from '@angular/core';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { ContentTogglesComponent } from '../../page/element/content-toggles/content-toggles.component';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { PageService } from '../../page.service';

@Component({
	selector: 'seafish-rass-home',
	templateUrl: './rass-home.component.html',
	styleUrls: ['./rass-home.component.css']
})
export class RassHomeComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(ContentTogglesComponent) contentTogglesComponent;	

	public apiBase: string = environment.apiBase;

	constructor(private page:PageService, private router:Router) {
	}

	ngOnInit() {
		this.page.load('rass-home').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'content-toggles') {
					this.contentTogglesComponent.populate(JSON.parse(row.data));
				}
			});
		});
	}

	doSearch(data) {
		this.router.navigate(['/rass/full-search'], { queryParams: data});
	}

}
