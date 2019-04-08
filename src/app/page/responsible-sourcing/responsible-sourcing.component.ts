import { Component, OnInit, ViewChild } from '@angular/core';

import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { Banner5050Component } from '../../page/element/banner5050/banner5050.component';
import { Discuss50Aqua50Component } from '../../page/element/discuss50aqua50/discuss50aqua50.component';
import { ContentTogglesComponent } from '../../page/element/content-toggles/content-toggles.component';
import { PublicationsFooterComponent } from '../../page/element/publications-footer/publications-footer.component';

import { PageService } from '../../page.service';

@Component({
  selector: 'app-responsible-sourcing',
  templateUrl: './responsible-sourcing.component.html',
  styleUrls: ['./responsible-sourcing.component.css']
})
export class ResponsibleSourcingComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(ContentTogglesComponent) contentToggles;
	@ViewChild(Banner5050Component) banner5050Component;
	@ViewChild(Discuss50Aqua50Component) discuss50aqua50;
	@ViewChild(PublicationsFooterComponent) publicationsFooterComponent;

	constructor(private page:PageService) {
		this.page.load('responsible-sourcing')
		.subscribe(data=>{
			data.map(row=> {
				if (row.element_slug == 'banner5050') {
					this.banner5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'sidemenu') {
					this.discuss50aqua50.populateSidemenu(JSON.parse(row.data));
				} else if (row.element_slug == 'link-dropdown30') {
					this.discuss50aqua50.populateLinkDropdown(JSON.parse(row.data));
				} else if (row.element_slug == 'content-toggles') {
					this.contentToggles.populate(JSON.parse(row.data));
				} /*else if (row.element_slug == 'publications-footer') {
					this.publicationsFooterComponent.populate(JSON.parse(row.data));
				}*/
			});
		});
	}

	ngOnInit() {
	}

}