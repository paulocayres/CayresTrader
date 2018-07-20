import { Component, OnInit, OnDestroy } from '@angular/core';
import * as ccxt from 'ccxt';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Subscriber } from 'rxjs/Subscriber';




@Component({
  selector: 'app-par',
  templateUrl: './par.component.html',
  styleUrls: ['./par.component.scss']
})
export class ParComponent implements OnInit, OnDestroy {


  negociosbtc: any;
  negociosalt: any;
  negocios: any;
  brasilia: any;
  selection = [
    {id: 1, name: 'LTC/BTC', sel: 'LTC/BRL'},
    {id: 2, name: 'BCH/BTC', sel: 'BCH/BRL'},
  ];
 selectedValue = 'LTC/BRL';
 timer: any;
 subscription: any;

  constructor(
    private btc: ccxt.mercado,
    private alt: ccxt.mercado,
    private router: Router
  ) {
    this.timer = Observable.timer(5000, 5000);
    this.subscription = this.timer.subscribe(t => this.reload(undefined));
   }

  ngOnInit() {
    this.btc.fetchTrades('BTC/BRL').then(b => {
      this.negociosbtc = b.reverse();
      for (let i = 0; i < this.negociosbtc.length; i++) {
        this.brasilia = moment(this.negociosbtc[i].datetime);
        this.negociosbtc[i].datetime = this.brasilia.format('DD/MM/YYYY HH:mm:ss');
      }
      this.alt.fetchTrades(this.selectedValue).then(l => {
        this.negociosalt = l.reverse();
        for (let i = 0; i < this.negociosalt.length; i++) {
          this.brasilia = moment(this.negociosalt[i].datetime);
          this.negociosalt[i].datetime = this.brasilia.format('DD/MM/YYYY HH:mm:ss');
        }

        this.negocios = this.negociosalt;
        for (let i = 0; i < this.negociosbtc.length; i++) {
          for (let j = 0; j < this.negociosalt.length; j++) {
            // tslint:disable-next-line:max-line-length
            if (this.negociosbtc[i].datetime >= this.negociosalt[j].datetime) {
              this.negocios[i].price = this.negociosalt[i].price / this.negociosbtc[j].price;
              // console.log(this.negociosalt[i].price + ' ' + this.negociosbtc[j].price);
              break;
            }
          }
        }



      });

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
