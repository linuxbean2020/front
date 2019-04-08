import { Component, OnInit, ViewChild } from '@angular/core';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { LinkListComponent } from '../../page/element/link-list/link-list.component';
import { LinkDropdownComponent } from '../../page/element/link-dropdown/link-dropdown.component';
import { environment } from '../../../environments/environment';
import { PageService } from '../../page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'seafish-tess-home',
  templateUrl: './tess-home.component.html',
  styleUrls: ['./tess-home.component.css']
})
export class TessHomeComponent implements OnInit {

	@ViewChild(Intro5050Component) intro5050Component;
	@ViewChild(LinkListComponent) linkListComponent;
	@ViewChild(LinkDropdownComponent) linkDropdownComponent;

	public apiBase: string = environment.apiBase;	

	constructor(private page:PageService, private router:Router) { }

	ngOnInit() {
				
		this.page.load('tess-home').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'headed-link-list') {
					this.linkListComponent.populate(JSON.parse(row.data));			
				} else if (row.element_slug == 'link-dropdown30') {
					this.linkDropdownComponent.populate(JSON.parse(row.data));
				}
			});
		});
	}

	goSearch(data) {
		this.router.navigate(['/tess/full-search'], { queryParams: data});
	}

}

