import { Component, OnInit} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-banner50502',
	templateUrl: './banner50502.component.html',
	styleUrls: ['./banner50502.component.css']
})
export class Banner50502Component implements OnInit {

	public data:any;

  	constructor(private sanitizer: DomSanitizer) { }

  	ngOnInit() {
  	}

	public populate(data) {
		this.data = data;
	}	

}
