import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ArchModule } from './arch/arch.module';
import { HeaderService } from './services/header/header.service';
import { LayoutService } from './services/layout/layout.service';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { StoresModule } from './stores/stores.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ArchModule,
    StoresModule,
    PagesModule,
    ComponentsModule
  ],
  providers: [
    HeaderService,
    LayoutService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
