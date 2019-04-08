import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-link-dropdown-left',
	templateUrl: './link-dropdown-left.component.html',
	styleUrls: ['./link-dropdown-left.component.css']
})
export class LinkDropdownLeftComponent implements OnInit {

	public data:any;
    @Input() public background: string = 'white';

  	constructor(private sanitizer: DomSanitizer) { }

  	ngOnInit() {
  	}

  	populate(data) {
  		this.data = data;
  	}

  	go(url) {
  		console.log('GOING TO: ' + url)
  	}

}
