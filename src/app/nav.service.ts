import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { TokenPayload, TokenResponse } from './interfaces';

@Injectable({
	providedIn: 'root'
})

export class NavService extends DataService {

    constructor(protected http: HttpClient, protected router: Router) {
        super(http, router);
    }

	loadSecondary(slug='0',id=0) {
		return this.request('get', 'nav/loadSecondary/' + slug + '/' + id);	
	}

	loadPreNav(slug='0',id=0) {
		return this.request('get', 'nav/loadPreNav/' + slug + '/' + id);	
	}

	getNavLinks() {
		return this.request('get', 'nav/loadLinks');
	}
}
