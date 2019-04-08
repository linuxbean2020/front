import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { TokenPayload, TokenResponse } from './interfaces';

@Injectable({
	providedIn: 'root'
})

export class PageService extends DataService {

    constructor(protected http: HttpClient, protected router: Router) {
        super(http, router);
    }

	load(slug) {
		return this.request('get', 'page/' + slug);	
	}

	getNewsCategories() {
		return this.request('get', 'category/subcategories/7');
	}

	getNextEvent() {
		return this.request('get', 'content/nextEvent');
	}

	getExternalEvents() {
		return this.request('get', 'content/externalEvents');	
	}

	getInitiatives() {
		return this.request('get', 'initiatives');
	}

	confirmMiUser(code,password) {
		return this.request('post', 'mi/verify', {code: code, password: password});
	}

	browseMi(path) {
		return this.request('get', 'api/mi/browse/' + path);
	}

	downloadPub(path,filename) {
		return this.request('post', 'api/mi/download', {path: path, filename: filename});
	}

}
