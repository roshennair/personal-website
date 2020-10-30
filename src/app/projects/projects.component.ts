import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	projects: Observable<any[]>;

	constructor(private firestore: AngularFirestore) { }

	ngOnInit(): void {
		this.projects = this.firestore.collection('projects').valueChanges();
	}
}
