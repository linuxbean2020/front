import { Component, OnInit, Input } from '@angular/core';
import { PageService } from '../../page.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'seafish-mi-file',
	templateUrl: './mi-file.component.html',
	styleUrls: ['./mi-file.component.css']
})
export class MiFileComponent implements OnInit {
	
    public files: any;
    public path: any[] = [];
    public apiBase: string = environment.apiBase;
    public window:any = window;
    public pathString: string = '';
    public code: string = localStorage.getItem('mi-code');
	
    constructor(public pageServ:PageService, public router:Router) { }

  	ngOnInit() {
        this.open();
  	}

    open(file='root') {
        this.path.push(file);
        this.makePathString();
        this.pageServ.browseMi(window.btoa(JSON.stringify(this.path))).subscribe(data=>{
            this.files = data;
        }, err=> {
            // not authorized
            this.router.navigateByUrl("/market-insights");
        });
    }

    parent() {
        this.path.pop();
        this.makePathString();
        this.pageServ.browseMi(window.btoa(JSON.stringify(this.path))).subscribe(data=>{
            this.files = data;
        });
    }

    makePathString() {
        this.pathString = window.btoa(JSON.stringify(this.path));
    }

}
