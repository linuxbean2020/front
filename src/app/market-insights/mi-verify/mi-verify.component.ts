import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../page.service';

@Component({
	selector: 'seafish-mi-verify',
	templateUrl: './mi-verify.component.html',
	styleUrls: ['./mi-verify.component.css']
})
export class MiVerifyComponent implements OnInit {

	public password:string = '';
	public cpassword:string = '';
	public code:string = '';
	public err: boolean = false;

	constructor(private router: Router, private route: ActivatedRoute, private pageServ:PageService) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.code = params.code;
		});
	}

	save() {
		this.err = false;
		if (!this.password || !this.cpassword || this.password !== this.cpassword || this.password.length<8) {
			this.err = true;
		} else {
			this.pageServ.confirmMiUser(this.code, this.password).subscribe(data=>{
				// route to loggedin page
				this.router.navigate(['/market-insights/browse']);
			});
		}
	}

}
