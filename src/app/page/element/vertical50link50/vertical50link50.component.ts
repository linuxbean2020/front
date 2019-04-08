import { Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { VerticalTextImageComponent } from '../../element/vertical-text-image/vertical-text-image.component';
import { LinkDropdownComponent } from '../../element/link-dropdown/link-dropdown.component';


@Component({
	selector: 'seafish-vertical50link50',
	templateUrl: './vertical50link50.component.html',
	styleUrls: ['./vertical50link50.component.css']
})
export class Vertical50Link50Component implements OnInit {

	public data:any;

	@ViewChild(VerticalTextImageComponent) verticalTextImageComponent;
	@ViewChild(LinkDropdownComponent) linkDropdownComponent;

  	constructor(private sanitizer: DomSanitizer) { }

  	ngOnInit() {
  	}

	public populateTextImage(data) {
		this.verticalTextImageComponent.populate(data);
	}	

	public populateLinkDropdown(data) {
		this.linkDropdownComponent.populate(data);
	}		

}
