import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class GearService extends DataService {
	
	constructor(protected http: HttpClient, protected router: Router) {
        super(http, router);
    }

	search(filters) {
		return this.request('post', 'gear/search', filters);
	}

    getAll() {
    	return this.request('get', 'gear/gear');
    }

    getSpecies() {	
    	return this.request('get', 'gear/species');
    }    

	get(id) {
		return this.request('get', 'gear/' + id);
	}

	getRecords() {
		return this.request('get', 'gear/records');
	}

	getRecord(id) {
		return this.request('get', 'gear/record/' + id);
	}	

	getLists() {
		return this.request('get', 'gear/lists');
	}

	getProfile(id,type) {
		return this.request('get', 'gear/gearFromSlug/'+id+'/'+type);
	}
}
