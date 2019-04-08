import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content, Category } from '../interfaces';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

	public contents: any[] = [];
	public category: any = {};

	constructor(private route: ActivatedRoute, private contentServ:ContentService) {
		this.route.params.subscribe(params => {
			this.contentServ.getArticlesForCatSlug(params['slug']).subscribe(data=>{
				this.contents = data.articles;
				this.category = data.cat;
			});
		});  	
  	}

  	ngOnInit() {
  	}

}
