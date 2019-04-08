import { Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { SidemenuComponent } from '../../element/sidemenu/sidemenu.component';
import { Threeup50Component } from '../../element/threeup50/threeup50.component';
import { LinkDropdownComponent } from '../../element/link-dropdown/link-dropdown.component';

@Component({
	selector: 'seafish-facts50careers50',
	templateUrl: './facts50careers50.component.html',
	styleUrls: ['./facts50careers50.component.css']
})
export class Facts50careers50Component implements OnInit {

	public data:any;
	@ViewChild(Threeup50Component) threeup50Component;
	@ViewChild(LinkDropdownComponent) linkDropdownComponent;

  	constructor(private sanitizer: DomSanitizer) { }

  	ngOnInit() {
  	}

	public populateLinkDropdown(data) {
		this.linkDropdownComponent.populate(data);
	}	

	public populateThreeup50(data) {
		this.threeup50Component.populate(data);
	}		

}
