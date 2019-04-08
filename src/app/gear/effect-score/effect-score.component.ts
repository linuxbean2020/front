import { Component, OnInit, Input } from '@angular/core';
import { GearService } from '../gear.service';

@Component({
	selector: 'seafish-effect-score',
	templateUrl: './effect-score.component.html',
	styleUrls: ['./effect-score.component.css']
})
export class EffectScoreComponent implements OnInit {

	@Input() public data:any;
	public species: string;
	public score:number;
	public rating: any = {
		'1': 'Very Poor',
		'2': 'Poor',
		'3': 'Average',
		'4': 'Good',
		'5': 'Very Good'
	};
	@Input() public speciesList: any[];

	constructor(public gearServ:GearService) { }

	ngOnInit() {
		if (this.data) {
			this.score = this.data.score;
			this.speciesList.map(cur=>{
				if (cur.id == this.data.species) {
					this.species = cur.name;
				}
			});
		}
	}

}
