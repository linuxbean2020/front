import { Component, OnInit } from '@angular/core';
import { AquacultureService } from '../aquaculture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'seafish-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ACProfileComponent implements OnInit {

	private apiBase:string;
	public expandedItems: any[] = [];	

	public expandedSources: boolean = false;
	public expandedCertification: boolean = false;
	public expandedGovernance: boolean = false;
	public profile: any;

  	constructor( private router: Router, private route: ActivatedRoute, private aqServ:AquacultureService) {
  		this.apiBase = environment.apiBase;
	}

  	ngOnInit() {
		this.route.params.subscribe(params => {
	  		this.aqServ.get(params.id).subscribe(data=>{
	  			this.profile = data;
	  			console.log(data)
	  		});
	  	});
  	}

	public expanded(item) {
		if (item == 'sources') {
			return this.expandedSources;
		} else {
			return this.expandedItems.indexOf(item.type)>=0;
		}
	}

	public expand(item) {
		if (item == 'sources') {
			this.expandedSources = !this.expandedSources;
		} else if (item == 'certification') {
			this.expandedCertification = !this.expandedCertification;
		} else if (item == 'governance') {
			this.expandedGovernance = !this.expandedGovernance;			
		} else {
			if (this.expanded(item)) {
				this.expandedItems.map((cur,i,arr)=>{
					if (item.type == cur) {
						this.expandedItems.splice(i,1);
					}
				})
			} else {
				this.expandedItems.push(item.type);
			}			
		}
	}  	

}
