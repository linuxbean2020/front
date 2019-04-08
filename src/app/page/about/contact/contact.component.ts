import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../../page/element/header/header.component';
import { FooterComponent } from '../../../page/element/footer/footer.component';
import { Intro5050Component } from '../../../page/element/intro5050/intro5050.component';
import { ThirdsBannerComponent } from '../../../page/element/thirds-banner/thirds-banner.component';
import { ContentTogglesComponent } from '../../../page/element/content-toggles/content-toggles.component';
import { PageService } from '../../../page.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	
	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(ThirdsBannerComponent) thirdsBannerComponent;
	@ViewChild(ContentTogglesComponent) contentTogglesComponent;
	
	constructor(private page:PageService) { }

	ngOnInit() {
		this.page.load('contact').subscribe(data=>{
			console.log(data)
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'thirdsBanner') {
					this.thirdsBannerComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'content-toggles') {
					this.contentTogglesComponent.populate(JSON.parse(row.data));
				}
			});
		});
	}

}
