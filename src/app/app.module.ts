import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
