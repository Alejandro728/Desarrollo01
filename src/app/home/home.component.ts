import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public nav:NavbarService) { }

  ngOnInit(): void {
  }

}
