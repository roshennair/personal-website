import { Component } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ContactFormModel } from './contact-form-model';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
	model = new ContactFormModel('', '', '');
	submitted = false;

	constructor() { }

	onSubmit(): void {
		this.submitted = true;
	}
}
