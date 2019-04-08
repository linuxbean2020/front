import { Component, OnInit, ViewChild } from '@angular/core';

import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { ContentTogglesComponent } from '../../page/element/content-toggles/content-toggles.component';
import { VideoBannerComponent } from '../../page/element/video-banner/video-banner.component';
import { Facts50careers50Component } from '../../page/element/facts50careers50/facts50careers50.component';
import { Comm50free50Component } from '../../page/element/comm50free50/comm50free50.component';
import { FeaturedItemsComponent } from '../../page/element/featured-items/featured-items.component';

import { PageService } from '../../page.service';

@Component({
  selector: 'app-safety-training',
  templateUrl: './safety-training.component.html',
  styleUrls: ['./safety-training.component.css']
})
export class SafetyTrainingComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(ContentTogglesComponent) contentTogglesComponent;
	@ViewChild(VideoBannerComponent) videoBannerComponent;
	@ViewChild(Facts50careers50Component) facts50Careers50Component;
	@ViewChild(Comm50free50Component) comm50free50Component;
	@ViewChild(FeaturedItemsComponent) featuredItemsComponent;

	constructor(private page:PageService) {
	}

	ngOnInit() {
		// dummy temp data
		var data:any = {};
		data.heading = "Training in the Seafood Industry";
		data.title1 = "Seagoing Training";
		data.subtitle1 = undefined;
		data.img1 = 1966;
		data.buttonText1 = 'Explore';
		data.buttonLink1 = '/article/seagoing-training';		
		data.title2 = "Onshore Training";
		data.subtitle2 = undefined;
		data.img2 = 1967;
		data.buttonText2 = 'Explore';
		data.buttonLink2 = '/training-onshore';		
		this.featuredItemsComponent.populate(data);


		this.page.load('safety-training')
		.subscribe(data=>{
			data.map(row=> {
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'content-toggles') {
					this.contentTogglesComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'video-banner') {
					this.videoBannerComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'threeup50') {
					this.facts50Careers50Component.populateThreeup50(JSON.parse(row.data));
				} else if (row.element_slug == 'link-dropdown30') {
					this.facts50Careers50Component.populateLinkDropdown(JSON.parse(row.data));
				} else if (row.element_slug == 'button-box') {
					//this.comm50free50Component.populateFree50(JSON.parse(row.data));
				} else if (row.element_slug == 'comm50') {
					//this.comm50free50Component.populateComm50(JSON.parse(row.data));
				}
			});
		});
	}

}