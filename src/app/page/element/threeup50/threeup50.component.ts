import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'seafish-threeup50',
	templateUrl: './threeup50.component.html',
	styleUrls: ['./threeup50.component.css']
})
export class Threeup50Component implements OnInit {

	public data:any = [];
	@ViewChild('linkButton') linkButton;

	constructor() { }

	ngOnInit() {
	}

	populate(data) {
		this.data = data;
		if (this.data.linkButton) {
			setTimeout(()=>{
				this.linkButton.data = this.data.linkButton;
			}, 0);
		}
	}

}
