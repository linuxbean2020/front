import { Component, OnInit, ViewChild } from '@angular/core';

import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { LinkListComponent } from '../../page/element/link-list/link-list.component';
import { LinkDropdownComponent } from '../../page/element/link-dropdown/link-dropdown.component';
import { Threeup50Component } from '../../page/element/threeup50/threeup50.component';
import { VideoBannerComponent } from '../../page/element/video-banner/video-banner.component';
import { TwoPeopleComponent } from '../../page/element/two-people/two-people.component';

import { PageService } from '../../page.service';

@Component({
  selector: 'app-media-room',
  templateUrl: './media-room.component.html',
  styleUrls: ['./media-room.component.css']
})
export class MediaRoomComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(LinkListComponent) linkListComponent;
	@ViewChild(LinkDropdownComponent) linkDropdownComponent;
	@ViewChild(Threeup50Component) threeUp50Component;
	@ViewChild(VideoBannerComponent) videoBannerComponent;
	@ViewChild(TwoPeopleComponent) twoPeopleComponent;

	constructor(private page:PageService) {
		this.page.load('media-room').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'headed-link-list') {
					this.linkListComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'link-dropdown30') {
					this.linkDropdownComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'threeup50') {
					this.threeUp50Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'video-banner') {
					this.videoBannerComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'twoPeople') {
					this.twoPeopleComponent.populate(JSON.parse(row.data));
				}
			});
		});
	}

	ngOnInit() {
	}

}
