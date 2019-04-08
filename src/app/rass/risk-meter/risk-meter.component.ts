import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'seafish-risk-meter',
  templateUrl: './risk-meter.component.html',
  styleUrls: ['./risk-meter.component.css']
})
export class RiskMeterComponent implements OnInit {
	
	@Input() public score;
  	constructor() { }

  	ngOnInit() {
  		console.log(this.score)
  	}

}
