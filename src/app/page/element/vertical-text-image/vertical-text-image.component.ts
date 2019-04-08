import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import * as $AB from 'jquery';
declare var $ :any;

@Component({
	selector: 'seafish-vertical-text-image',
	templateUrl: './vertical-text-image.component.html',
	styleUrls: ['./vertical-text-image.component.css']
})
export class VerticalTextImageComponent implements OnInit {

	public text: string = undefined;
	public image: number = undefined;
	public apiBase: string = undefined;

	constructor() {
		this.apiBase = environment.apiBase;
	}

	ngOnInit() {
	}

	populate(data) {
		this.text = data.text;
		this.image = data.image;
	}

	showImage() {
		$('#image').modal('show');
	}

}
