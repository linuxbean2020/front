import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../page/element/header/header.component';
import { FooterComponent } from '../../page/element/footer/footer.component';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { ThirdsBannerComponent } from '../../page/element/thirds-banner/thirds-banner.component';
import { Sidemenu50Dropdownlink50Component } from '../../page/element/sidemenu50-dropdownlink50/sidemenu50-dropdownlink50.component';
import { ContentTogglesComponent } from '../../page/element/content-toggles/content-toggles.component';
import { LinkListComponent } from '../../page/element/link-list/link-list.component';
import { PageService } from '../../page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	
	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(ThirdsBannerComponent) thirdsBannerComponent;
	@ViewChild(Sidemenu50Dropdownlink50Component) sidemenu50Dropdownlink50Component;
	@ViewChild(ContentTogglesComponent) contentTogglesComponent;
	@ViewChild(LinkListComponent) linkListComponent;
	
	constructor(private page:PageService) { }

	ngOnInit() {
		this.page.load('about').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'thirdsBanner') {
					this.thirdsBannerComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'sidemenu') {
					this.sidemenu50Dropdownlink50Component.populateSidemenu(JSON.parse(row.data));
				} else if (row.element_slug == 'link-dropdown30') {
					this.sidemenu50Dropdownlink50Component.populateLinkDropdown(JSON.parse(row.data));
				} else if (row.element_slug == 'content-toggles') {
					this.contentTogglesComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'headed-link-list') {
					this.linkListComponent.populate(JSON.parse(row.data));
				}
			});
		});
	}

}
