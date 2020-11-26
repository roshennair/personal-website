import { Component, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
	@ViewChild('contactForm') contactForm: NgForm;
	contactData = {
		name: '',
		email: '',
		message: ''
	};
	submitted = false;

	constructor(private firestore: AngularFirestore) { }

	async onSubmit() {
		this.submitted = true;
		for (let property in this.contactData) {
			this.contactData[property] = this.contactForm.value[property];
		}
		try {
			await this.firestore.collection('contact-form-submissions').add(this.contactData);
			console.log('New contact form submitted!');
		} catch (err) {
			console.log(err);
		}
		this.contactForm.reset();
	}
}
