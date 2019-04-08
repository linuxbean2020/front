import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { TokenPayload, TokenResponse, UserDetails } from './interfaces';
@Injectable({
	providedIn: 'root'
})
export class AuthService extends DataService {

    siteID:string;
    admin:number = 0;

    constructor(protected http: HttpClient, protected router: Router) {
        super(http, router);
    }

    public getUserDetails(): UserDetails {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        } else {
            return null;
        }
    }

    public isLoggedIn(): boolean {
        const user = this.getUserDetails();
        if (user) {
            this.admin = 1;
            return user.exp > Date.now() / 1000;
        } else {
            this.admin = 0;
            return false;
        }
    }

    public login(user: TokenPayload): Observable<any> {
        return this.request('post', 'mi/login', user);
    }

    public logout(): void {
        this.token = '';
        this.admin = 0;
        window.localStorage.removeItem('jwt-token');
        this.router.navigateByUrl('/');
    }
}