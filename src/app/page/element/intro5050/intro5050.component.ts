import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from "@angular/router";
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { ContentService } from '../../../content.service';
import { UUID } from 'angular2-uuid';

import * as $AB from 'jquery';
declare var $ :any;

@Component({
	selector: 'seafish-intro5050',
	templateUrl: './intro5050.component.html',
	styleUrls: ['./intro5050.component.css']
})
export class Intro5050Component implements OnInit {

	public data:any;
	public imgUrl:string;
	public apiBase: string;
	public uuid:string = '';
	@ViewChild('linkButton') linkButton;

  	constructor(private sanitizer: DomSanitizer, private router: Router, private content:ContentService) {
  		this.uuid = UUID.UUID();
  		this.apiBase = environment.apiBase;
  	}

  	ngOnInit() {
  	}

	public populate(data) {
		this.data = data;
		if (data.featured_img)  {
			this.imgUrl = environment.apiBase + 'file/' + data.featured_img;
		}

		if (this.data.linkButton && this.linkButton) {
			this.linkButton.data = this.data.linkButton;
		}

	}

	clickImage() {
		if (this.data.featured_text && this.data.featured_text.length) {
			// show modal
			$('#intro-featured-' + this.uuid).modal('show');
		}
	}

}
