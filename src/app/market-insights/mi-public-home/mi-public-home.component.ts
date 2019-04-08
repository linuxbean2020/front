import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPayload } from '../../interfaces';
import { AuthService } from '../../auth.service';
import { Intro5050Component } from '../../page/element/intro5050/intro5050.component';
import { PublicationsFooterComponent } from '../../page/element/publications-footer/publications-footer.component';
import { PageService } from '../../page.service';

@Component({
	selector: 'seafish-mi-public-home',
	templateUrl: './mi-public-home.component.html',
	styleUrls: ['./mi-public-home.component.css']
})
export class MiPublicHomeComponent implements OnInit {

    @ViewChild(Intro5050Component) intro5050Component;
    @ViewChild(PublicationsFooterComponent) publicationsFooterComponent;

	public credentials: any = {
		email: '',
		password: ''
	};
	public loginFail:boolean = false;

	constructor(private auth:AuthService, private router: Router, private page:PageService) { }

	ngOnInit() {
        this.page.load('mi-home').subscribe(data=>{
            data.map(row=>{
                if (row.element_slug == 'intro5050') {
                    this.intro5050Component.populate(JSON.parse(row.data));
                }
            });
        });
	}

    login() {
        this.loginFail = false;
        this.auth.login(this.credentials).subscribe((data) => {
            if (data.result) {
                localStorage.setItem('mi-code',data.code);
                this.router.navigateByUrl("/market-insights/browse");
            } else {
                this.loginFail = true;
            }
        }, (err) => {
            console.error(err);
        });
    }

}