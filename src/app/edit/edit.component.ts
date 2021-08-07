import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/navbar.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  products: Product[] = [];
  constructor(public nav:NavbarService, private router:Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful();
  }

    Edit():void{
      this.router.navigate(["ProductEdit"]);
    }
    Delete():void{

    }

}
