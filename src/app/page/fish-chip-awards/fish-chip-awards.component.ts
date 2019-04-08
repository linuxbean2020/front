import { Component, OnInit, ViewChild } from '@angular/core';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { SidemenuComponent } from '../../page/element/sidemenu/sidemenu.component';
import { LinkDropdownComponent } from '../../page/element/link-dropdown/link-dropdown.component';
import { HeroComponent } from '../../page/element/hero/hero.component';
import { ContentTogglesComponent } from '../../page/element/content-toggles/content-toggles.component';
import { PublicationsFooterComponent } from '../../page/element/publications-footer/publications-footer.component';
import { environment } from '../../../environments/environment';
import { PageService } from '../../page.service';


@Component({
  selector: 'seafish-fish-chip-awards',
  templateUrl: './fish-chip-awards.component.html',
  styleUrls: ['./fish-chip-awards.component.css']
})
export class FishChipAwardsComponent implements OnInit {


    @ViewChild(Intro5050Component) intro5050Component;
    @ViewChild(SidemenuComponent) sidemenuComponent;
    @ViewChild(HeroComponent) heroComponent;
    @ViewChild(LinkDropdownComponent) linkDropdownComponent;
    @ViewChild(ContentTogglesComponent) contentTogglesComponent;
    @ViewChild(PublicationsFooterComponent) publicationsFooterComponent;

    public apiBase: string = environment.apiBase;    

    constructor(private page:PageService) { }

    ngOnInit() {
        this.page.load('fish-chip-awards').subscribe(data=>{
            data.map(row=>{
                if (row.element_slug == 'intro5050') {
                    this.intro5050Component.populate(JSON.parse(row.data));
                } else if (row.element_slug == 'sidemenu') {
                    this.sidemenuComponent.populate(JSON.parse(row.data));
                } else if (row.element_slug == 'link-dropdown30') {
                    this.linkDropdownComponent.populate(JSON.parse(row.data));
                } else if (row.element_slug == 'content-toggles') {
                    this.contentTogglesComponent.populate(JSON.parse(row.data));
                } else if (row.element_slug == 'hero') {
                    this.heroComponent.populate(JSON.parse(row.data));
                }
            });
        });
    }

}