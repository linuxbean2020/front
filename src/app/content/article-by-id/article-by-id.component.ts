import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../content.service';

@Component({
  selector: 'seafish-article-by-id',
  templateUrl: './article-by-id.component.html',
  styleUrls: ['./article-by-id.component.css']
})
export class ArticleByIdComponent implements OnInit {

  constructor(private router: Router,
		private route: ActivatedRoute, private content:ContentService ) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.content.get(params.id).subscribe(data=>{
  			this.router.navigate(['/article/' + data.slug]);
  		})
  	});
  }

}
