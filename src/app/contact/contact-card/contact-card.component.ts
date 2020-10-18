import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-contact-card',
	templateUrl: './contact-card.component.html',
	styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
	@Input() logoPath: string;
	@Input() instruction: string;
	@Input() info: string;

	constructor() { }

	get altString(): string {
		return `${this.instruction} logo`;
	}
}
