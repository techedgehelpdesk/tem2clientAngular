import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  items = ['Search By', 'Manufacturer', 'Price', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  route(id:string) {
    this._router.navigate(['product/details'])
  }

}
