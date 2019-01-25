import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../app.routes';

/**
 * Load the App Root Router
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
