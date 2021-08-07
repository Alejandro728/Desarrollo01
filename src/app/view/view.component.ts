import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/navbar.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})


export class ViewComponent implements OnInit {

  products: Product[] = [];

  constructor(public nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.products = [{idProduct:1, productName:'Daniel',productCost:33,productAmount:12}];
  }

}

