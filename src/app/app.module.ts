import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RodzicComponent } from './rodzic/rodzic.component';
import { DzieckoComponent } from './dziecko/dziecko.component';

@NgModule({
  declarations: [
    AppComponent,
    RodzicComponent,
    DzieckoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
