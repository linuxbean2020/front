import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-link-dropdown',
	templateUrl: './link-dropdown.component.html',
	styleUrls: ['./link-dropdown.component.css']
})
export class LinkDropdownComponent implements OnInit {

	public data:any;
    @Input() public background: string = 'white';
    @ViewChild('linkButton') linkButton;

  	constructor(private sanitizer: DomSanitizer) { }

  	ngOnInit() {

  	}

  	populate(data) {
  		this.data = data;
  	}

}