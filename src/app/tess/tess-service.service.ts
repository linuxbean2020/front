import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class TessService extends DataService {
	
	constructor(protected http: HttpClient, protected router: Router) {
        super(http, router);
    }

	search(filters) {
		return this.request('post', 'tess/search', filters);
	}


    getList(list) {
    	return this.request('get', 'tess/list/' + list);
    }

	get(id) {
		return this.request('get', 'tess/' + id);
	}

	getRecords() {
		return this.request('get', 'tess/records');
	}

	getRecord(id) {
		return this.request('get', 'tess/record/' + id);
	}	

	getLists() {
		return this.request('get', 'tess/lists');
	}

	getOrgs() {
		return this.request('get', 'tess/orgs');
	}

	getProfile(id) {
		return this.request('get', 'tess/record/'+id);
	}
}
