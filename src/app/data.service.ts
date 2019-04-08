import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { TokenPayload, TokenResponse } from './interfaces';

@Injectable()
export class DataService {
	protected token: string;

	constructor(protected http: HttpClient, protected router: Router) {
	}

	protected saveToken(token: string): void {
		localStorage.setItem('jwt-token', token);
		this.token = token;
	}

	protected getToken(): string {
		if (!this.token) {
			this.token = localStorage.getItem('jwt-token');
		}
		return this.token;
	}

	protected request(method: 'post'|'get'|'delete'|'put', type, postData?: any): Observable<any> {
		let base;
		if (method === 'post') {
			if (type == 'login' || type == 'register') {
				base = this.http.post(environment.apiBase + `${type}`, postData);
			} else {
				base = this.http.post(environment.apiBase + `${type}`, postData, { headers: { Authorization: `Bearer ${this.getToken()}` }});
			}
		} else if (method == 'delete') {
			base = this.http.delete(environment.apiBase + `${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
		} else if (method =='put') {
			base = this.http.put(environment.apiBase + `${type}`, postData, { headers: { Authorization: `Bearer ${this.getToken()}` }});
		} else {
			base = this.http.get(environment.apiBase + `${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
		}

		const request = base.pipe(
			map((data: TokenResponse) => {
				if (data && data.token) {
					this.saveToken(data.token);
				}
				return data;
			})
		);

		return request;
	}
}
