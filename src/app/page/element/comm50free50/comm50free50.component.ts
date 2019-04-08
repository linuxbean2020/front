import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment'
import { PublicationsComponent } from '../publications/publications.component';
import { ButtonBoxComponent } from '../button-box/button-box.component';

@Component({
	selector: 'seafish-comm50free50',
	templateUrl: './comm50free50.component.html',
	styleUrls: ['./comm50free50.component.css']
})
export class Comm50free50Component implements OnInit {

	@ViewChild(PublicationsComponent) publicationsComponent;
	@ViewChild(ButtonBoxComponent) buttonBoxComponent;

	constructor() { }

	ngOnInit() {
	}

	public populateFree50(data) {
		this.buttonBoxComponent.populate(data);
	}

	public populateComm50(data) {
		this.publicationsComponent.populate(data);
	}	

}
