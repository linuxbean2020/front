import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'seafish-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

	public header: string = "We Like to Communicate";
	public items: any[] = [];
	public apiBase: string = environment.apiBase;

	constructor() { }

	ngOnInit() {
	}

	populate(data) {
		this.header = data.header;
		this.items = data.items;
		data.items.map((cur,i,arr)=>{
			arr[i].filename = cur.filename.replace('.',":")
		});
	}

}
