import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ContentService } from '../../../content.service';

@Component({
	selector: 'seafish-single-cat-news',
	templateUrl: './single-cat-news.component.html',
	styleUrls: ['./single-cat-news.component.css']
})
export class SingleCatNewsComponent implements OnInit {

	public news: any = undefined;
	@Input() public cat;

	constructor(private sanitizer: DomSanitizer, private content:ContentService) { }

	ngOnInit() {
  		this.content.getLatestForCat(this.cat,1)
  		.subscribe(data=>{
            this.news = data[0];
  		});		
	}

}
