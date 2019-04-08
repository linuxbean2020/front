import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ContentService } from '../../../content.service';

@Component({
	selector: 'seafish-two-people',
	templateUrl: './two-people.component.html',
	styleUrls: ['./two-people.component.css']
})
export class TwoPeopleComponent implements OnInit {

	public person1:any;
	public person2:any;
	@Input() public data:any = {};
	public apiBase:string;

	constructor(private contServ:ContentService) {}

	ngOnInit() {
		this.apiBase = environment.apiBase;
	}

	populate(data) {
		this.data = data;
		console.log(data)
		if (data.person1) {
			this.contServ.getPerson(data.person1).subscribe(data=>{
				this.person1 = data[0];
			});
		}
		if (data.person2) {
			this.contServ.getPerson(data.person2).subscribe(data=>{
				this.person2 = data[0];
			});
		}		
	}



}
