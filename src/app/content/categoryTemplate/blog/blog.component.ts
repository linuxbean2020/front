import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

	@Input() data: any;
	private featuredImgUrl:string;
	private inlineImgUrl:string;
	public apiBase:string;

	constructor() { }

	ngOnInit() {
		console.log(this.data)
		this.data.gallery = JSON.parse(this.data.gallery);
		this.featuredImgUrl = environment.apiBase + 'file/' + this.data.featured_img;
		this.inlineImgUrl = environment.apiBase + 'file/' + this.data.inline_img;
		this.apiBase = environment.apiBase;
	}

}
