import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
	@Input() categories: string[];
	@Input() description: string;
	@Input() image: string;
	@Input() name: string;
	@Input() repository: string;
	@Input() status: string;

	constructor() { }

	ngOnInit(): void {
	}

}
