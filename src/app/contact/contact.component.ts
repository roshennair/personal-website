import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	contacts: Observable<any[]>;

	constructor(private firestore: AngularFirestore) { }

	ngOnInit(): void {
		this.contacts = this.firestore.collection('contacts').valueChanges();
	}

}
