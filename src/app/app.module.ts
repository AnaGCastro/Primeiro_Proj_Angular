import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MeuPrimeiroComponenet } from './MeuPrimeiro.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
