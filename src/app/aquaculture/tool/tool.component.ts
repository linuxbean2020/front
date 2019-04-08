import { Component, OnInit, ViewChild } from '@angular/core';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { ContentTogglesComponent } from '../../page/element/content-toggles/content-toggles.component';
import { PublicationsFooterComponent } from '../../page/element/publications-footer/publications-footer.component';
import { environment } from '../../../environments/environment';
import { PageService } from '../../page.service';

@Component({
  selector: 'seafish-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ACToolComponent implements OnInit {


	@ViewChild(Intro5050Component) public intro5050Component;
	@ViewChild(ContentTogglesComponent) public contentTogglesComponent;

	constructor(private page:PageService) {
	}

  	ngOnInit() {

		this.page.load('aq-tool').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'content-toggles') {
					this.contentTogglesComponent.populate(JSON.parse(row.data));					
				}
			});

		});
	}

}