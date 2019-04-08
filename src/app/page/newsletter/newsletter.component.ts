import { Component, OnInit, ViewChild } from '@angular/core';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';

@Component({
	selector: 'seafish-newsletter',
	templateUrl: './newsletter.component.html',
	styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050;

	constructor() { }

	ngOnInit() {
		this.intro5050.populate({
			title: "Seafood Newsletters",
			lead: "Seafish offers a wide range of newsletters to keep our stakeholders informed and up to date.",
			body: "<p>If you'd like the latest in promoting seafood news delivered straight to your inbox, choose from the following titles, or feel free to select all three.</p><p><ul><li>Fish is the Dish</li><li>Enjoy Fish & Chips</li><li>National Fish & Chip Awards</li></ul></p><p>Alternatively, if you're looking for the media alerts, downloadable assets and our press releases, navigate to Media Room below.</p>",
			featured_img: 1558
		});
	}

}
