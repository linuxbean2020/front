import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private router: Router
  ) {}

  	ngOnInit() {
		this.router.events.forEach((event) => {
			if(event instanceof NavigationEnd) {
				let chunks = event.urlAfterRedirects.split('/');

				var words = chunks.pop().split('-');

				for(var i = 0; i < words.length; i++) {
				  var word = words[i];
				  words[i] = word.charAt(0).toUpperCase() + word.slice(1);
				}

				this.titleService.setTitle(words.join(' ') + ' - Seafish');
			}
		});
  }
}