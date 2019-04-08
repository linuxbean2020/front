import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService extends DataService {
	
	constructor(protected http: HttpClient, protected router: Router) {
        super(http, router);
    }

	cats() {
		return this.request('get', 'publications/cats');
	}

	types() {
		return this.request('get', 'publications/types');
	}	

	search(search,page) {
		if (search.keyword.length==0) {
			return this.request('get', encodeURI('publications/search/0/'+search.cat+'/'+search.type+'/'+page));
		} else {
			return this.request('get', encodeURI('publications/search/'+search.keyword+'/'+search.cat+'/'+search.type+'/'+page));
		}
		
	}

}
