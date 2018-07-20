import { Component, OnInit, OnDestroy } from '@angular/core';
import * as ccxt from 'ccxt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Subscriber } from 'rxjs/Subscriber';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {

  orders: any = '';
  all: any;
  timer: any;
  subscription: any;

  selection = [
    {id: 1, name: 'BTC/BRL'},
    {id: 2, name: 'LTC/BRL'},
    {id: 3, name: 'BCH/BRL'},
  ];
 selectedValue = 'BTC/BRL';


  constructor(
    private book: ccxt.mercado,
  ) {
    this.timer = Observable.timer(5000, 5000);
    this.subscription = this.timer.subscribe(t => this.reload(undefined));
   }

  ngOnInit() {
      this.book.fetchOrderBook(this.selectedValue).then( b => {
        this.orders = b;
      });
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }


    reload(sel: string) {
      console.log('entrou');
      if (sel) {
        this.selectedValue = sel;
      }
      console.log(this.selectedValue);
      this.ngOnInit();
    }
  }
