import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'seafish-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	public cookieConsent:boolean = false;

	constructor() { }

	ngOnInit() {
		let cc = localStorage.getItem('seafish-cc');
		if (cc) {
			this.cookieConsent = true;
		}
	}

	cc() {
		localStorage.setItem('seafish-cc','1');
		this.cookieConsent = true;
	}

}
