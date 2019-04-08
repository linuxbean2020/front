import { Component, OnInit } from '@angular/core';
import { AquacultureService } from '../aquaculture.service';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'seafish-ac-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.css']
})
export class ACPreviewComponent implements OnInit {

	public items: any[] = [];
    public apiBase: string = environment.apiBase;

	constructor(private aq:AquacultureService) { }

	ngOnInit() {
		this.aq.getPreviews().subscribe(data=>{
			this.items = [];
			data.map(cur=>{
				if (cur.status == 1) {
					this.items.push(cur);
				}
			});
		});
	}

}
