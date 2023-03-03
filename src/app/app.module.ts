import { ComponentsModule } from './components/components.module';
import { ViewsModule } from './views/views.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule, ViewsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
