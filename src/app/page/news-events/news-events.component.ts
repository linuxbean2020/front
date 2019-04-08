import { Component, OnInit, ViewChild } from '@angular/core';
import { ThirdsBanner2Component } from '../element/thirds-banner2/thirds-banner2.component';
import { Banner50502Component } from '../element/banner50502/banner50502.component';
import { PublicationsFooterComponent } from '../element/publications-footer/publications-footer.component';
import { PageService } from '../../page.service';


@Component({
	selector: 'seafish-news-events',
	templateUrl: './news-events.component.html',
	styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent implements OnInit {

	@ViewChild(ThirdsBanner2Component) thirdsBanner2Component;
	@ViewChild(Banner50502Component) banner50502Component;
	@ViewChild(PublicationsFooterComponent) publicationsFooterComponent;

	public external: any[] = [];
	public monthOpen: string;

	constructor(public page:PageService) {

	}

	isMonthOpen(code) {
		return code == this.monthOpen;
	}

	openMonth(code) {
		this.monthOpen = code;
	}

	ngOnInit() {

		this.page.getExternalEvents().subscribe(data=>{
			this.external = data;
		});

		this.thirdsBanner2Component.data = {
			heading: 'Looking for our Media Room?',
			body: 'Find Media Assets and our Press Contacts in our <a href="/media-room">Media Room</a>',
			buttonText: 'Sign up for <strong>Our Media Alerts</strong>',
			heading2: 'Get the Latest Udpates'
		};		

		this.banner50502Component.data = {
			header: 'Seafood-Related Events',
			subheader: 'Running an Event?',
			body: 'If you organise a seafood related event and want it to be added to these events listings, please <a><strong>add your event here</strong></a>'
		};

		this.publicationsFooterComponent.data = {
			header: "We Like to Communicate",
			subheader: "Access the latest seafood industry reports, surveys and other publications",
			items: [
				{
					description: "This is a publication isn't it.",
					filename: "dummy3:pdf",
					id: 3,
					title: "Publication 3"
				},
				{
					description: "This is a publication isn't it.",
					filename: "dummy3:pdf",
					id: 3,
					title: "Publication 3"
				},
				{
					description: "This is a publication isn't it.",
					filename: "dummy3:pdf",
					id: 3,
					title: "Publication 3"
				},
				{
					description: "This is a publication isn't it.",
					filename: "dummy3:pdf",
					id: 3,
					title: "Publication 3"
				},
				{
					description: "This is a publication isn't it.",
					filename: "dummy3:pdf",
					id: 3,
					title: "Publication 3"
				},
				{
					description: "This is a publication isn't it.",
					filename: "dummy3:pdf",
					id: 3,
					title: "Publication 3"
				}												
			]
		};
	}

}
