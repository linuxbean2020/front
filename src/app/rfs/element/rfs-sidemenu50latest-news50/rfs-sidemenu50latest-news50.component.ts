import { Component, OnInit, ViewChild } from '@angular/core';
import { SidemenuComponent } from '../../../page/element/sidemenu/sidemenu.component';

@Component({
	selector: 'seafish-rfs-sidebar50latest-news50',
	templateUrl: './rfs-sidemenu50latest-news50.component.html',
	styleUrls: ['./rfs-sidemenu50latest-news50.component.css']
})
export class RfsSidemenu50latestNews50Component implements OnInit {

	@ViewChild(SidemenuComponent) sidemenuComponent;

  	constructor() { }

  	ngOnInit() {
  		this.sidemenuComponent.populate({
	  			items: [
	  				{menu_item: 'The Seafish Guide to The Responsible Fishing Scheme', item_text: "This guide outlines the updated Responsible Fishing Scheme (RFS) describing what has changed, how it is managed and how it will benefit the whole supply chain."},
	  				{menu_item: 'RFS Standard', item_text: "This guide outlines the updated Responsible Fishing Scheme (RFS) describing what has changed, how it is managed and how it will benefit the whole supply chain."}
	  			]
  			}
  		);
  	}

}
