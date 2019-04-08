import { Component, OnInit, ViewChild } from '@angular/core';

import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { Banner5050Component } from '../../page/element/banner5050/banner5050.component';
import { Awards50Facts50Component } from '../../page/element/awards50facts50/awards50facts50.component';

import { PageService } from '../../page.service';

@Component({
  selector: 'app-promoting-seafood',
  templateUrl: './promoting-seafood.component.html',
  styleUrls: ['./promoting-seafood.component.css']
})
export class PromotingSeafoodComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(Banner5050Component) banner5050Component;
	@ViewChild(Awards50Facts50Component) awards50Facts50Component;

	constructor(private page:PageService) {
		this.page.load('promoting-seafood').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'banner5050') {
					this.banner5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'sidemenu') {
					this.awards50Facts50Component.populateSidemenu(JSON.parse(row.data));
				} else if (row.element_slug == 'twoup50') {
					this.awards50Facts50Component.populateTwoup50(JSON.parse(row.data));
				}
			});
		});
	}

	ngOnInit() {
	}

}
