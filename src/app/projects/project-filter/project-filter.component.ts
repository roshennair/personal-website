import { Component, OnInit } from '@angular/core';
import tippy from 'tippy.js';

@Component({
	selector: 'app-project-filter',
	templateUrl: './project-filter.component.html',
	styleUrls: ['./project-filter.component.css']
})
export class ProjectFilterComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		tippy('[data-tippy-dark]', {
			content: 'Coming soon',
			placement: 'bottom',
			theme: 'dark'
		})
	}

}
