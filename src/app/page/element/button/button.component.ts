import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'element-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

	@Input() public data:any;
	@Input() public buttonClass:string = 'primary';
	@Input() public hideArrow:boolean = false;
	public apiBase: string = environment.apiBase;

	constructor() { }

	ngOnInit() {
	}

}
