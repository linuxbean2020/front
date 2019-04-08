import { Component, OnInit } from '@angular/core';
import { GearService } from '../gear.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import * as $AB from 'jquery';
declare var $ :any;
@Component({
	selector: 'seafish-gear-profile',
	templateUrl: './gear-profile.component.html',
	styleUrls: ['./gear-profile.component.css']
})
export class GearProfileComponent implements OnInit {

	public profile: any;
	private apiBase:string;
    public locations: any = [];
    public types: any = [];
    public sectors: any = [];
    public species: any;
    public modalImage: string;

	constructor(public gearServ:GearService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
		this.apiBase = environment.apiBase;
	}

  showImage(imgID) {
    this.modalImage = this.apiBase + 'file/' + imgID;
    $('#image').modal('show');
  }

	ngOnInit() {

        this.gearServ.getSpecies().subscribe(data=>{
            this.species = data;
        });

  		this.route.params.subscribe(params => {
  			this.gearServ.getProfile(params['id'],params['type']).subscribe(profile=>{
  				this.profile = profile;
                  console.log(this.profile)
                if (this.profile.videos) {
  				    this.profile.videos.map((cur,i,arr)=>{
  					    this.profile.videos[i].url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + cur.code);
  				    });
                }
  			});
  		});
	}

}