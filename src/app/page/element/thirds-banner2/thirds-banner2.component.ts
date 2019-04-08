import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seafish-thirds-banner2',
  templateUrl: './thirds-banner2.component.html',
  styleUrls: ['./thirds-banner2.component.css']
})
export class ThirdsBanner2Component implements OnInit {

	public data:any;

	constructor() { }

	ngOnInit() {
	}

	public populate(data) {
		this.data = data;			
	}	

}
