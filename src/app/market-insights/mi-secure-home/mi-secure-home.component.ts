import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page.service';

@Component({
	selector: 'seafish-mi-secure-home',
	templateUrl: './mi-secure-home.component.html',
	styleUrls: ['./mi-secure-home.component.css']
})
export class MiSecureHomeComponent implements OnInit {

	public tree:any;

	constructor(public pageServ:PageService) { }

	ngOnInit() {

	}

}
