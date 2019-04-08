import { Component, OnInit} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-content-toggles',
	templateUrl: './content-toggles.component.html',
	styleUrls: ['./content-toggles.component.css']
})
export class ContentTogglesComponent implements OnInit {

	public data:any;
	public expandedItems: any[] = [];

  	constructor(private sanitizer: DomSanitizer) { }

  	ngOnInit() {
  	}

	public populate(data) {
		this.data = data;
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


}
