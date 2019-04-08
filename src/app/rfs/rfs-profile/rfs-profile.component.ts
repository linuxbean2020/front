import { Component, OnInit } from '@angular/core';
import { RfsService } from '../rfs.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'seafish-rfs-profile',
	templateUrl: './rfs-profile.component.html',
	styleUrls: ['./rfs-profile.component.css']
})
export class RfsProfileComponent implements OnInit {

	public profile: any;
	private apiBase:string;

	constructor(public rfsServ:RfsService, private route: ActivatedRoute) {
		this.apiBase = environment.apiBase;		
	}

	ngOnInit() {
  		this.route.params.subscribe(params => {
  			this.rfsServ.getProfile(params['id']).subscribe(profile=>{
  				this.profile = profile;
  				console.log(profile)
  			});
  		});
	}

}
