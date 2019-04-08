import { Component, OnInit, ViewChild } from '@angular/core';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { LinkDropdownComponent } from '../../page/element/link-dropdown/link-dropdown.component';
import { FeaturedItemsComponent } from '../../page/element/featured-items/featured-items.component';
import { ContentTogglesComponent } from '../../page/element/content-toggles/content-toggles.component';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { PageService } from '../../page.service';

@Component({
  selector: 'seafish-gear-home',
  templateUrl: './gear-home.component.html',
  styleUrls: ['./gear-home.component.css']
})
export class GearHomeComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050Component;
	//@ViewChild(FeaturedItemsComponent) featuredItemsComponent;
	@ViewChild(LinkDropdownComponent) linkDropdownComponent;
	@ViewChild(ContentTogglesComponent) contentTogglesComponent;	

	public apiBase: string = environment.apiBase;

	constructor(private page:PageService, private router:Router) {
	}

	ngOnInit() {

		// dummy temp data
		var data:any = {};
		data.heading = "Featured Profiles";
		data.title1 = "Atlantic Salmon";
		data.subtitle1 = undefined;
		data.img1 = 2009;
		data.buttonText1 = 'Profile';
		data.buttonLink1 = '/aquaculture/profile/11';
		data.title2 = "European Sea Bass";
		data.subtitle2 = undefined;
		data.img2 = 2001;
		data.buttonText2 = 'Profile';
		data.buttonLink2 = '/aquaculture/profile/26';		
		//this.featuredItemsComponent.populate(data);		

		this.page.load('gear-home').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'link-dropdown30') {
					this.linkDropdownComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'content-toggles') {
					this.contentTogglesComponent.populate(JSON.parse(row.data));
				}
			});
		});
	}

	doSearch(data) {
		this.router.navigate(['/gear/full-search'], { queryParams: data});
	}

}
