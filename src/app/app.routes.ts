import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

/**
 * Root application router configuration
 */
export const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent },
];
