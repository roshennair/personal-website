// Modules & providers
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectFilterComponent } from './projects/project-filter/project-filter.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ContactCardComponent } from './contact/contact-card/contact-card.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		ProjectsComponent,
		ContactComponent,
		ProjectFilterComponent,
		ProjectCardComponent,
		ContactCardComponent,
		ContactFormComponent,
		NotFoundComponent,
		BottomNavbarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAnalyticsModule,
		AngularFirestoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
