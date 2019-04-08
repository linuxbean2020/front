import { Component, OnInit, ViewChild } from '@angular/core';

import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { Sidemenu50content50Component } from '../../page/element/sidemenu50content50/sidemenu50content50.component';
import { Vertical50Link50Component } from '../../page/element/vertical50link50/vertical50link50.component';
import { PublicationsComponent } from '../../page/element/publications/publications.component';

import { PageService } from '../../page.service';

@Component({
  selector: 'app-insight-research',
  templateUrl: './insight-research.component.html',
  styleUrls: ['./insight-research.component.css']
})
export class InsightResearchComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(Sidemenu50content50Component) sidemenu50content50Component;
	@ViewChild(Vertical50Link50Component) vertical50link50Component;
	@ViewChild(PublicationsComponent) publications;


	constructor(private page:PageService) {
		this.page.load('insight-research')
		.subscribe(data=>{
			data.map(row=> {
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'sidemenu') {
					this.sidemenu50content50Component.populateSidemenu(JSON.parse(row.data));
				} else if (row.element_slug == 'content-toggles') {
					this.sidemenu50content50Component.populateContent(JSON.parse(row.data));
				} else if (row.element_slug == 'vertical-text-image') {
					this.vertical50link50Component.populateTextImage(JSON.parse(row.data));
				} else if (row.element_slug == 'link-dropdown30') {
					this.vertical50link50Component.populateLinkDropdown(JSON.parse(row.data));
				}

			});
		});
	}

	ngOnInit() {
	}

}