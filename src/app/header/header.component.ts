import { Component, OnInit } from '@angular/core';
import tippy from 'tippy.js';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor() { }

	ngOnInit() {
		tippy('[data-tippy-light]', {
			content: 'Coming soon',
			placement: 'bottom',
			theme: 'light'
		})
	}
}
