import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class RassService extends DataService {
	
	constructor(protected http: HttpClient, protected router: Router) {
        super(http, router);
    }

	search(filters) {
		return this.request('post', 'rass/search', filters);
	}

    getAll() {
    	return this.request('get', 'rass');
    }

	get(id) {
		return this.request('get', 'rass/' + id);
	}

	getProfile(slug) {
		return this.request('get', 'rass/fromSlug/'+slug);
	}

	getSpecies() {
		return this.request('get', 'rass/fish');
	}
}
