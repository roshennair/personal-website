import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	contacts: { logoPath: string, instruction: string, info: string }[] = [
		{
			logoPath: '/assets/svg/phone.svg',
			instruction: 'Call me',
			info: '+601155018109'
		},
		{
			logoPath: '/assets/svg/mail.svg',
			instruction: 'Email me',
			info: 'roshen620@gmail.com'
		}
	]

	constructor() { }

	ngOnInit(): void {
	}

}
