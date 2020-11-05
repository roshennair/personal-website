import { Component } from '@angular/core';
import { ContactFormModel } from './contact-form-model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
	model: ContactFormModel = {
		name: '',
		email: '',
		message: ''
	};
	submitted = false;

	constructor(private firestore: AngularFirestore) { }

	async onSubmit(event: Event) {
		event.preventDefault();
		this.submitted = true;
		try {
			await this.firestore.collection('contact-form-submissions').add(this.model);
			console.log('New contact form submitted!');
		} catch (err) {
			console.log(err);
		}
	}
}
