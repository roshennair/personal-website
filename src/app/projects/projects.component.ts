import { AfterViewInit, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
	projects: Observable<any[]>;
	// projects = Array(1);

	constructor(private firestore: AngularFirestore) { }

	ngAfterViewInit() {
		this.projects = this.firestore.collection('projects').valueChanges();
	}
}
