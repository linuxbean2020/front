import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'seafish-button-box',
	templateUrl: './button-box.component.html',
	styleUrls: ['./button-box.component.css']
})
export class ButtonBoxComponent implements OnInit {

	public header: string = "";
	public body: string = "";
	public button_text: string = "";

	constructor() { }

	ngOnInit() {
	}

	populate(data) {
		this.header = data.header;
		this.body = data.body;
		this.button_text = data.button_text;
	}

}