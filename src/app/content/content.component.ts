import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content, Category } from '../interfaces';
import { ContentService } from '../content.service';
import { ContentDirective } from '../content.directive';
import { DomSanitizer} from '@angular/platform-browser';

// load category templates
import { NewsComponent } from './categoryTemplate/news/news.component';
import { BlogComponent } from './categoryTemplate/blog/blog.component';
import { DefaultComponent } from './categoryTemplate/default/default.component';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	@ViewChild(ContentDirective) contentDir;

	public content:any = {
        id: undefined,
		title: undefined,
		body: undefined,
		slug: undefined,
		tags: [],
		category_id: undefined,
		status: undefined,
        featured_img: undefined,
        inline_img: undefined,
        created_at: undefined,
        updated_at: undefined,
        person: undefined,
        sidebars: [],
        video_gallery: [],
        documents: [],
        toggles: []
	};

	constructor(
		private router: Router,
		private route: ActivatedRoute, 
		private contentServ:ContentService, 
		private componentFactoryResolver: ComponentFactoryResolver,
		private sanitizer: DomSanitizer
	) {}

	ngOnInit() {
		// dynamic template based on slug
  		this.route.params.subscribe(params => {
  			this.contentServ.getForSlug(params['slug']).subscribe(content=>{
  				this.content = content;

  				this.content.video_gallery_urls = [];
  				if (this.content.video_gallery) {
					this.content.video_gallery.map((vid)=>{
						this.content.video_gallery_urls.push(this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + vid));
					});
  				}

  				if (this.content.sidebars && this.content.sidebars[0] && this.content.sidebars[0].text) {
  					// get the spokesperson
  					this.contentServ.getPerson(this.content.sidebars[0].text).subscribe(data=>{
  						this.content.person = data[0];
		  				if (this.content.status == 0) {
		  					//this.router.navigate(['/']);
		  				} else {
		  					this.loadComponent();
		  				}
  					});
  				} else {
	  				if (content.status == 0) {
	  					//this.router.navigate(['/']);
	  				} else {
	  					this.loadComponent();
	  				}
  				}

  			});
  		});
	}

	loadComponent() {
		var componentFactory;
		if (this.content.category_id == 7) {
			componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewsComponent);
		} else if (this.content.category_id == 23) {
			componentFactory = this.componentFactoryResolver.resolveComponentFactory(BlogComponent);
		} else {
			componentFactory = this.componentFactoryResolver.resolveComponentFactory(DefaultComponent);
		}
		let viewContainerRef = this.contentDir.viewContainerRef;
		viewContainerRef.clear();
		let componentRef = viewContainerRef.createComponent(componentFactory);
		componentRef.instance.data = this.content;				
	}

}
