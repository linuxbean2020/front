import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class RfsService extends DataService {
	
	constructor(protected http: HttpClient, protected router: Router) {
        super(http, router);
    }

	locations() {
		return this.request('get', 'rfs/locations');
	}

	species() {
		return this.request('get', 'rfs/species');
	}

	search(filters) {
		return this.request('post', 'rfs/searchFront', filters);
	}

	getAll() {
		return this.request('get', 'rfs/getAllFront');
	}	

	getProfile(id) {
		return this.request('get', 'rfs/profileFront/'+id);
	}

	alphaSearch(alpha) {
		return this.request('get', 'rfs/alpha/'+alpha);
	}

}
