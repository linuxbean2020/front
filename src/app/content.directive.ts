import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[content-placeholder]'
})
export class ContentDirective {
	constructor(public viewContainerRef: ViewContainerRef) { }
}