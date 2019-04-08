import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../page.service';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-publications-footer',
	templateUrl: './publications-footer.component.html',
	styleUrls: ['./publications-footer.component.css']
})
export class PublicationsFooterComponent implements OnInit {

	public data:any;
	public apiBase: string = environment.apiBase;

	constructor(public page:PageService) {
	}

	ngOnInit() {
	}

	populate(data) {
		this.data = data;
		data.items.map((cur,i,arr)=>{
			arr[i].filename = cur.filename.replace('.',":")
		});
	}

}
