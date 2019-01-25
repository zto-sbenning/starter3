import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

/**
 * Module for all page in the application
 */
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
  ],
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    NotFoundPageComponent,
<<<<<<< HEAD
    blah
=======
    blouh
>>>>>>> test
  ]
})
export class PagesModule { }
