// Angular
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components de rotas
import { AppComponent } from '../app.component';
import { GraphicComponent } from '../graphic/graphic.component';
import { BookComponent } from '../book/book.component';
import { HomeComponent } from '../home/home.component';
import { TradesComponent } from '../trades/trades.component';
import { ParComponent } from '../par/par.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'graphic',
    component: GraphicComponent,
  },
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'trades',
    component: TradesComponent,
  },
  {
    path: 'par',
    component: ParComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
