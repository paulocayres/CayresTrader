import { Component, OnInit, OnDestroy } from '@angular/core';
import * as ccxt from 'ccxt';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Subscriber } from 'rxjs/Subscriber';



@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent implements OnInit, OnDestroy {

  negocios: any;
  brasilia: any;
  timer: any;
  subscription: any;

  selection = [
    {id: 1, name: 'BTC/BRL'},
    {id: 2, name: 'LTC/BRL'},
    {id: 3, name: 'BCH/BRL'},
  ];
 selectedValue = 'BTC/BRL';

  constructor(
    private trades: ccxt.mercado,

  ) {
    this.timer = Observable.timer(5000, 5000);
    this.subscription = this.timer.subscribe(t => this.reload(undefined));
   }

  ngOnInit() {
    this.trades.fetchTrades(this.selectedValue).then(t => {
      this.negocios = t.reverse();
      for (let i = 0; i < this.negocios.length; i++) {
        if (i === 0 || i === 1) {
          console.log(this.negocios[i].datetime);
        }
        this.brasilia = moment(this.negocios[i].datetime);
        this.negocios[i].datetime = this.brasilia.format('DD/MM/YYYY HH:mm:ss');

      }

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
