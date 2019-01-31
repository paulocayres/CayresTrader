import { Component, OnInit } from '@angular/core';

declare const TradingView: any;


@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    return new TradingView.widget(
      {
      'autosize': true,
      'symbol': 'BITSTAMP:BTCUSD',
      'interval': '240',
      'timezone': 'exchange',
      'theme': 'Light',
      'style': '1',
      'locale': 'br',
      'toolbar_bg': '#f1f3f6',
      'enable_publishing': false,
      'hide_side_toolbar': false,
      'allow_symbol_change': true,
      'watchlist': [
        'MERCADO:BTCBRL',
        'MERCADO:LTCBRL',
        'MERCADO:BCHBRL',
        'BITSTAMP:BTCUSD',
        'COINBASE:BTCUSD',
        'COINBASE:LTCUSD',
        'COINBASE:BCHUSD',
        'COINBASE:LTCBTC',
        'COINBASE:BCHBTC'
      ],
      'details': true,
      'studies': [
        'BB@tv-basicstudies',
        'Stochastic@tv-basicstudies',
        'StochasticRSI@tv-basicstudies',
        'study("BTC longs n' shorts", shorttitle="BitFinex positions")


        long = security("BITFINEX:BTCUSDLONGS", period, close)
        short = security("BITFINEX:BTCUSDSHORTS", period, close)


        p1 = plot(long, color=#7481f2, style=line, linewidth=2, transp=10, trackprice=true, title="Longs")
        p2 = plot(short, color=#f46666, style=line, linewidth=2, transp=10, trackprice=true, title="Shorts")'
      ],
      'container_id': 'tradingview_96f75'
    });

  }
}
