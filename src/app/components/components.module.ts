import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { SimpleHeaderPresenterComponent } from './header-container/simple-header-presenter/simple-header-presenter.component';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { SimpleLayoutPresenterComponent } from './layout-container/simple-layout-presenter/simple-layout-presenter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HeaderContainerComponent,
    SimpleHeaderPresenterComponent,
    LayoutContainerComponent,
    SimpleLayoutPresenterComponent
  ],
  exports: [
    HeaderContainerComponent,
    LayoutContainerComponent
  ]
})
export class ComponentsModule { }
