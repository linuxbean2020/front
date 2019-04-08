import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { PageService } from '../../../page.service';
import { ContentService } from '../../../content.service';
import { Category } from '../../../interfaces';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'seafish-news-summary',
  templateUrl: './news-summary.component.html',
  styleUrls: ['./news-summary.component.css']
})
export class NewsSummaryComponent implements OnInit {

    public categories: Category[];
	public news: any[] = [];
    public event: any;
    public apiBase: string = environment.apiBase;
    @Input() public firstCol = 1;

	constructor(private sanitizer: DomSanitizer, private page: PageService, private content:ContentService) { }

  	ngOnInit() {
  		this.page.getNewsCategories()
  		.subscribe(data=>{
  			this.categories = data;
  		});

  		this.content.getLatestForCat(7,3)
  		.subscribe(data=>{
            this.news = data;
  		});

        this.page.getNextEvent()
        .subscribe(data=>{
            this.event = data;
        });          
  	}

    filterMonth(ind) {
        if (ind==0) {
            this.content.getThisMonthForCat(3)
            .subscribe(data=>{
                this.news = data;
            });
        } else {
            this.content.getLastMonthForCat(3)
            .subscribe(data=>{
                this.news = data;
            });
        }
    }

    filterCat(category) {
        this.content.getLatestForCat(category.id,3)
        .subscribe(data=>{
            this.news = data;
        });
    }

}