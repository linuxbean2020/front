import { Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { SidemenuComponent } from '../../element/sidemenu/sidemenu.component';
import { LinkDropdownComponent } from '../../element/link-dropdown/link-dropdown.component';

@Component({
	selector: 'seafish-sidemenu50-dropdownlink50',
	templateUrl: './sidemenu50-dropdownlink50.component.html',
	styleUrls: ['./sidemenu50-dropdownlink50.component.css']
})
export class Sidemenu50Dropdownlink50Component implements OnInit {

	public data:any;

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
