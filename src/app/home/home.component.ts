import { Component, OnInit } from '@angular/core';

import {MDBBootstrapModule} from 'angular-bootstrap-md';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cripto: any = '../../assets/criptomoedas.png';


  constructor() { }

  ngOnInit() {

  }

}
