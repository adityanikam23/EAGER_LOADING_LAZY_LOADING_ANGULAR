import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerModule } from './eager/eager.module';
import { HomeComponent } from './home/home.component';
import { LazylandingComponent } from './lazy/lazylanding/lazylanding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LazylandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EagerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
