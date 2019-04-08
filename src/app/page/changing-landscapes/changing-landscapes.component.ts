import { Component, OnInit, ViewChild } from '@angular/core';

import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { ThirdsBannerComponent } from '../../page/element/thirds-banner/thirds-banner.component';
import { PageService } from '../../page.service';

@Component({
  selector: 'app-changing-landscapes',
  templateUrl: './changing-landscapes.component.html',
  styleUrls: ['./changing-landscapes.component.css']
})
export class ChangingLandscapesComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(ThirdsBannerComponent) thirdsBannerComponent;

	constructor(private page:PageService) {
		this.page.load('changing-landscapes').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'thirdsBanner') {
					this.thirdsBannerComponent.populate(JSON.parse(row.data));
				}
			});
		});
	}

	ngOnInit() {
	}

}
