import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { RedirectGuard } from './redirect.guard';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'projects', component: ProjectsComponent },
	{
		path: 'blog',
		canActivate: [RedirectGuard],
		component: HomeComponent,
		data: {
			externalUrl: 'https://blog.roshennair.com/'
		}
	},
	{ path: 'contact', component: ContactComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
