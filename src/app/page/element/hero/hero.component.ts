import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'seafish-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

	public imgUrl: string;
	public vidUrl: string;

	constructor(
	) {
	}

	ngOnInit() {	
	}

	ngOnDestroy() {
		this.vidUrl = undefined;
	}

	public populate(data) {
		if (data.fileType == 'image') {
			this.imgUrl = environment.apiBase + 'file/' + data.id;
		} else {
			//this.imgUrl = environment.apiBase + 'file/' + data.videoThumbId;
			this.vidUrl = environment.apiBase + 'file/' + data.id;
			console.log(this.vidUrl)
		}
		
	}	

}
