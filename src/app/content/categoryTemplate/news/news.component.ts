import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import * as $AB from 'jquery';
declare var $ :any;

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

	@Input() data: any;
	private featuredImgUrl:string;
	private inlineImgUrl:string;
	private icons: Object;
	private api_base:string;
	public modalImage: string;
	public expandedItems: any[] = [];

	constructor() {
	}

	ngOnInit() {
		this.data.gallery = JSON.parse(this.data.gallery);
		this.setIcons();
		this.featuredImgUrl = environment.apiBase + 'file/' + this.data.featured_img;
		this.inlineImgUrl = environment.apiBase + 'file/' + this.data.inline_img;
		this.api_base = environment.apiBase;
	}

	public setIcons() {
		this.icons = {
			'Further Info': 'icon_info.svg',
			'Contacts': 'icon_contact.svg',
			'Downloads': 'icon_download.svg',
			'Follow': 'icon_social.svg'
		}
	}

	public expanded(item) {
		return this.expandedItems.indexOf(item.title)>=0;
	}

	public expand(item) {
		if (this.expanded(item)) {
			this.expandedItems.map((cur,i,arr)=>{
				if (item.title == cur) {
					this.expandedItems.splice(i,1);
				}
			})
		} else {
			this.expandedItems.push(item.title);
		}
	}

	showImage(imgID) {
		this.modalImage = this.api_base + 'file/' + imgID;
		$('#image').modal('show');
	}

}
