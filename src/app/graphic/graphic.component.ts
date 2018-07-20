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
      'symbol': 'MERCADO:BTCBRL',
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
        'COINBASE:BTCUSD',
        'COINBASE:LTCUSD',
        'COINBASE:BCHUSD',
        'COINBASE:LTCBTC',
        'COINBASE:BCHBTC'
      ],
      'details': true,
      'studies': [
        'BB@tv-basicstudies'
      ],
      'container_id': 'tradingview_96f75'
    });

  }
}
