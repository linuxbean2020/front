import { Component, OnInit, Input } from '@angular/core';
import { NavService } from '../../nav.service';

@Component({
	selector: 'seafish-secondary-nav',
	templateUrl: './secondary-nav.component.html',
	styleUrls: ['./secondary-nav.component.css']
})
export class SecondaryNavComponent implements OnInit {

	@Input() slug:string = '0';
	@Input() id:number = 0;
	public nav: any;
	public pre_nav: any;

	constructor(public navServ:NavService) { }

	ngOnInit() {

		this.navServ.loadPreNav(this.slug,this.id).subscribe(data=>{
			this.pre_nav = data;
		});

		this.navServ.loadSecondary(this.slug,this.id).subscribe(data=>{
			this.nav = data;
		});
	}

}
