import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-twoup50',
	templateUrl: './twoup50.component.html',
	styleUrls: ['./twoup50.component.css']
})
export class Twoup50Component implements OnInit {

	public data:any;
	@ViewChild('linkButton') linkButton;

	constructor(
	) {}

	ngOnInit() {	
	}

	public populate(data) {
		this.data = data;
		if (this.data.linkButton1) {
			setTimeout(()=>{
				this.linkButton.data = this.data.linkButton1;
			}, 0);
		}
	}	

}
