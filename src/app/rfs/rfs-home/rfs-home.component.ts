import { Component, OnInit, ViewChild } from '@angular/core';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { SidemenuComponent } from '../../page/element/sidemenu/sidemenu.component';
import { Banner5050FiveUpComponent } from '../../page/element/banner5050-five-up/banner5050-five-up.component';
import { VideoBannerTwoUpComponent } from '../../page/element/video-banner-two-up/video-banner-two-up.component';
import { PublicationsFooterComponent } from '../../page/element/publications-footer/publications-footer.component';
import { environment } from '../../../environments/environment';
import { PageService } from '../../page.service';

@Component({
	selector: 'seafish-rfs-home',
	templateUrl: './rfs-home.component.html',
	styleUrls: ['./rfs-home.component.css']
})
export class RfsHomeComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(SidemenuComponent) sidemenuComponent;
	@ViewChild(Banner5050FiveUpComponent) banner5050FiveUpComponent;
	@ViewChild(VideoBannerTwoUpComponent) videoBannerTwoUpComponent;
	@ViewChild(PublicationsFooterComponent) publicationsFooterComponent;

	public apiBase: string = environment.apiBase;	

	constructor(private page:PageService) { }

	ngOnInit() {

		this.banner5050FiveUpComponent.populate({
			header: 'Our Supply Chain Supporters',
			body: 'Learn more about our Supply Chain by <strong><a>clicking here</a></strong>',
			image1: 1951,
			image2: 1952,
			image3: 1953,
			image4: 1954,
			image5: 1955
		});
				
		this.page.load('rfs-home').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'sidemenu') {
					this.sidemenuComponent.populate(JSON.parse(row.data));
				//} else if (row.element_slug == 'banner5050') {
				//	this.banner5050FiveUpComponent.populate(JSON.parse(row.data));					
				} else if (row.element_slug == 'video-banner-2up') {
					this.videoBannerTwoUpComponent.populate(JSON.parse(row.data));
				}
			});
		});
	}

}
