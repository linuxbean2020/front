import { Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { SidemenuComponent } from '../../element/sidemenu/sidemenu.component';
import { Twoup50Component } from '../../element/twoup50/twoup50.component';

@Component({
	selector: 'seafish-awards50facts50',
	templateUrl: './awards50facts50.component.html',
	styleUrls: ['./awards50facts50.component.css']
})
export class Awards50Facts50Component implements OnInit {

	public data:any;
	@ViewChild(SidemenuComponent) sidemenuComponent;
	@ViewChild(Twoup50Component) twoup50Component;

  	constructor(private sanitizer: DomSanitizer) { }

  	ngOnInit() {
  	}

	public populateSidemenu(data) {
		this.sidemenuComponent.populate(data);
	}	

	public populateTwoup50(data) {
		this.twoup50Component.populate(data);
	}		

}
