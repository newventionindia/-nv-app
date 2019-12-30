import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProxyLoadChildrenComponent } from './components/proxy-load-children/proxy-load-children.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProxyLoadChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
