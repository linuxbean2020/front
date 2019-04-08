import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../../page/element/header/header.component';
import { FooterComponent } from '../../../page/element/footer/footer.component';
import { Intro5050Component } from '../../../page/element/intro5050/intro5050.component';
//import { VideoBannerComponent } from '../../../page/element/video-banner/video-banner.component';
import { ContentTogglesComponent } from '../../../page/element/content-toggles/content-toggles.component';
import { LinkListComponent } from '../../../page/element/link-list/link-list.component';
import { PageService } from '../../../page.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
	
	@ViewChild(Intro5050Component) intro5050Component;
	//@ViewChild(VideoBannerComponent) videoBannerComponent;
	@ViewChild(ContentTogglesComponent) contentTogglesComponent;
	@ViewChild(LinkListComponent) linkListComponent;
	
	constructor(private page:PageService) { }

	ngOnInit() {
		this.page.load('vacancies').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				//} else if (row.element_slug == 'video-banner') {
				//	this.videoBannerComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'content-toggles') {
					this.contentTogglesComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'headed-link-list') {
					this.linkListComponent.populate(JSON.parse(row.data));
				}
			});
		});
	}

}
