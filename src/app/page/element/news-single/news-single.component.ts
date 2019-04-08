import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ContentService } from '../../../content.service';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-news-single',
	templateUrl: './news-single.component.html',
	styleUrls: ['./news-single.component.css']
})
export class NewsSingleComponent implements OnInit {

	public news: any = undefined;
	@Input() public cat;
	private apiBase: string = environment.apiBase;

	constructor(private sanitizer: DomSanitizer, private content:ContentService) { }

	ngOnInit() {
  		this.content.getLatestForCat(this.cat,1)
  		.subscribe(data=>{
            this.news = data[0];
  		});		
	}

}
