import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { TokenPayload, TokenResponse } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class AquacultureService extends DataService {

    constructor(protected http: HttpClient, protected router: Router) {
        super(http, router);
    }

	getPreviews() {
    	return this.request('get', 'aquaculture');
	}

	get(id) {
    	return this.request('get', 'aquaculture/' + id);
	}

}
