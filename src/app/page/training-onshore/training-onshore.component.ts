import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../page/element/header/header.component';
import { FooterComponent } from '../../page/element/footer/footer.component';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { ThirdsBannerComponent } from '../../page/element/thirds-banner/thirds-banner.component';
import { LinkDropdownComponent } from '../../page/element/link-dropdown/link-dropdown.component';
import { LinkDropdownLeftComponent } from '../../page/element/link-dropdown-left/link-dropdown-left.component';
import { SidemenuComponent } from '../../page/element/sidemenu/sidemenu.component';
import { ContentTogglesComponent } from '../../page/element/content-toggles/content-toggles.component';

import { PageService } from '../../page.service';

@Component({
  selector: 'app-training-onshore',
  templateUrl: './training-onshore.component.html',
  styleUrls: ['./training-onshore.component.css']
})
export class TrainingOnshoreComponent implements OnInit {
	
	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(ThirdsBannerComponent) thirdsBannerComponent;
	@ViewChild(LinkDropdownComponent) linkDropdownComponent;
	@ViewChild(LinkDropdownLeftComponent) linkDropdownLeftComponent;
	@ViewChild(SidemenuComponent) sidemenuComponent;
	@ViewChild(ContentTogglesComponent) contentTogglesComponent;
	
	
	constructor(private page:PageService) { }

	ngOnInit() {
		this.page.load('training-onshore').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'thirdsBanner') {
					this.thirdsBannerComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'link-dropdown30') {
					this.linkDropdownComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'link-dropdown-left') {
					this.linkDropdownLeftComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'sidemenu') {
					this.sidemenuComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'content-toggles') {
					this.contentTogglesComponent.populate(JSON.parse(row.data));
				}
			});
		});
	}

}
