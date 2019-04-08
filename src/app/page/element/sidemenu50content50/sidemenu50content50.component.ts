import { Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { SidemenuComponent } from '../../element/sidemenu/sidemenu.component';
import { ContentTogglesComponent } from '../../element/content-toggles/content-toggles.component';

@Component({
	selector: 'seafish-sidemenu50content50',
	templateUrl: './sidemenu50content50.component.html',
	styleUrls: ['./sidemenu50content50.component.css']
})
export class Sidemenu50content50Component implements OnInit {

	public data:any;

	@ViewChild(SidemenuComponent) sidemenuComponent;
	@ViewChild(ContentTogglesComponent) contentTogglesComponent;

  	constructor(private sanitizer: DomSanitizer) { }

  	ngOnInit() {
  	}

	public populateSidemenu(data) {
		this.sidemenuComponent.populate(data);
	}	

	public populateContent(data) {
		this.contentTogglesComponent.populate(data);
	}		

}
