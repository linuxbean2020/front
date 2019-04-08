import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-video-banner',
	templateUrl: './video-banner.component.html',
	styleUrls: ['./video-banner.component.css']
})
export class VideoBannerComponent implements OnInit {

	public data:any;

	public url1: any = '';
	public url2: any = '';
	public url3: any = '';

	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
	}

	public populate(data) {
		this.data = data;
		this.url1 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + data.video1);
		this.url2 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + data.video2);
		this.url3 = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + data.video3);
	}	  

}
