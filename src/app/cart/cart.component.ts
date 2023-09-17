import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantity = 1;
  cart_items = [1,2,1,2]

  constructor() { }

  ngOnInit(): void {
  }

}
