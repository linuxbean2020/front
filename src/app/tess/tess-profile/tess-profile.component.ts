import { Component, OnInit } from '@angular/core';
import { TessService } from '../tess-service.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'seafish-tess-profile',
  templateUrl: './tess-profile.component.html',
  styleUrls: ['./tess-profile.component.css']
})
export class TessProfileComponent implements OnInit {

	public profile: any;
	private apiBase:string;
    public locations: any = [];
    public types: any = [];
    public sectors: any = [];

	constructor(public tessServ:TessService, private route: ActivatedRoute) {
		this.apiBase = environment.apiBase;		
        this.tessServ.getList('countries').subscribe(data=>{
            data.map(cur=>{
                this.locations[cur.id] = cur.name;
            });
        });

        this.tessServ.getList('types').subscribe(data=>{
            data.map(cur=>{
                this.types[cur.id] = cur.name;
            });
        });

        this.tessServ.getList('sectors').subscribe(data=>{
            data.map(cur=>{
                this.sectors[cur.id] = cur.name;
            });
        });            
	}

	ngOnInit() {
  		this.route.params.subscribe(params => {
  			this.tessServ.getProfile(params['id']).subscribe(profile=>{
  				this.profile = profile;
  			});
  		});
	}

}