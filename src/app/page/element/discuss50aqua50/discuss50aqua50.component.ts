import { Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { SidemenuComponent } from '../../element/sidemenu/sidemenu.component';
import { LinkDropdownComponent } from '../../element/link-dropdown/link-dropdown.component';

@Component({
	selector: 'seafish-discuss50aqua50',
	templateUrl: './discuss50aqua50.component.html',
	styleUrls: ['./discuss50aqua50.component.css']
})
export class Discuss50Aqua50Component implements OnInit {

	@ViewChild(SidemenuComponent) sidemenuComponent;
	@ViewChild(LinkDropdownComponent) linkDropdownComponent;

  	constructor(private sanitizer: DomSanitizer) { }

  	ngOnInit() {
  	}

	public populateSidemenu(data) {
		this.sidemenuComponent.populate(data);
	}	

	public populateLinkDropdown(data) {
		this.linkDropdownComponent.populate(data);
	}		


}
