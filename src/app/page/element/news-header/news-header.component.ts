import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../content.service';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-news-header',
	templateUrl: './news-header.component.html',
	styleUrls: ['./news-header.component.css']
})
export class NewsHeaderComponent implements OnInit {

	public news: any[] = [];
	public imgUrlNews: string = undefined;

	public blog: any[] = [];
	public imgUrlBlog: string = undefined;	

	constructor(private content:ContentService) {
		this.content.getLatestForCat(7,4).subscribe(data=>{
			this.news = data;
			if (this.news && this.news[0] && this.news[0].featured_img) {
				this.imgUrlNews = environment.apiBase + 'file/' + this.news[0].featured_img;
			}
		});

		this.content.getLatestForCat(23,4).subscribe(data=>{
			this.blog = data;
			if (this.blog && this.blog[0] && this.blog[0].featured_img) {
				this.imgUrlBlog = environment.apiBase + 'file/' + this.blog[0].featured_img;
			}
		});		
	}

	ngOnInit() {
	}

}
