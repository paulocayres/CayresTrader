// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Components
import { AppComponent } from './app.component';
import { GraphicComponent } from './graphic/graphic.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { TradesComponent } from './trades/trades.component';
import { ParComponent } from './par/par.component';


// Rotas
import { AppRoutingModule } from './router/app.routing.module';

// Bibliotecas Externas
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import * as ccxt from 'ccxt';



@NgModule({
  declarations: [
    AppComponent,
    GraphicComponent,
    BookComponent,
    HomeComponent,
    TradesComponent,
    ParComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    ccxt.mercado,
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
