import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ArchModule } from './arch/arch.module';
import { HeaderService } from './services/header/header.service';
import { LayoutService } from './services/layout/layout.service';
import { StoresModule } from './stores/stores.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { AboutPageModule } from './pages/about-page/about-page.module';
import { NotFoundPageModule } from './pages/not-found-page/not-found-page.module';
import { ComponentsModule } from './components/components.module';

/**
 * Root Module
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ArchModule,
    StoresModule,
    ComponentsModule,
    HomePageModule,
    AboutPageModule,
    NotFoundPageModule
  ],
  providers: [
    HeaderService,
    LayoutService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
