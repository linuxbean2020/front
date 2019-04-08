import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Content } from './interfaces';
import { DataService } from './data.service';

@Injectable({
	providedIn: 'root'
})
export class ContentService extends DataService {
	
	constructor(protected http: HttpClient, protected router: Router) {
        super(http, router);
    }

    searchFull(keyword) {
    	return this.request('get', 'content/searchFull/' + keyword);
    }

	get(id) {
		return this.request('get', 'content/' + id);
	}    

	getForSlug(slug) {
		return this.request('get', 'content/forSlug/' + slug);
	}

	getArticles() {
		return this.request('get', 'content');
	}

	getArticlesForCatSlug(cat_slug) {
		return this.request('get', 'content/forCatSlug/' + cat_slug);
	}	

	getCategories() {
		return this.request('get', 'category');
	}

	getLastMonthForCat(limit) {
		return this.request('get', 'content/lastMonthForCat/7/'+limit);
	}

	getThisMonthForCat(limit) {
		return this.request('get', 'content/thisMonthForCat/7/'+limit);
	}

	getLatestForCat(catID,limit) {
		return this.request('get', 'content/recentForCat/'+catID+'/'+limit);
	}

	getUpcomingEvents(limit) {
		return this.request('get', 'content/upcomingEvents/'+limit);
	}
	
	coordsForPcd(pcd) {
		return this.request('get', 'content/coordsForPostcode/' + pcd);
	}

	getPerson(id) {
		return this.request('get', 'people/' + id);
	}
}
