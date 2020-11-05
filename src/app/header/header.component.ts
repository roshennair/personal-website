import { Component, OnInit } from '@angular/core';
import tippy from 'tippy.js';
import 'tippy.js/themes/light.css';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor() { }

	ngOnInit() {
		tippy('[data-tippy]', {
			content: 'Coming soon',
			theme: 'roshennair'
		})
	}
}
