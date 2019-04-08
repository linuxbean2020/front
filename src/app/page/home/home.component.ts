import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../page/element/header/header.component';
import { FooterComponent } from '../../page/element/footer/footer.component';
import { HeroComponent } from '../../page/element/hero/hero.component';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { PageService } from '../../page.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	@ViewChild(HeroComponent) heroComponent;
	@ViewChild(Intro5050Component) intro5050Component;
	constructor(private page:PageService, private titleService:Title) {
		
	}

	ngOnInit() {
		this.titleService.setTitle('Seafish Home');
		this.page.load('home').subscribe(data=>{
			data.map(row=>{
				if (row.element_slug == 'hero') {
					this.heroComponent.populate(JSON.parse(row.data));
				} else if (row.element_slug == 'intro5050') {
					this.intro5050Component.populate(JSON.parse(row.data));
				}
			});
		});
	}

}
