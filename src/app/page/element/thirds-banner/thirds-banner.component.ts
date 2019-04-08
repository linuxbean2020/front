import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'seafish-thirds-banner',
	templateUrl: './thirds-banner.component.html',
	styleUrls: ['./thirds-banner.component.css']
})
export class ThirdsBannerComponent implements OnInit {

	public data:any;
	@ViewChild('linkButton') linkButton;
	
	constructor() { }

	ngOnInit() {
	}

	public populate(data) {
		this.data = data;
		if (this.data.linkButton && this.linkButton) {
			this.linkButton.data = this.data.linkButton;
		}
	}	

}
