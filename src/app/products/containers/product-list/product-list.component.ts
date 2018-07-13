import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = []

  constructor() { }

  ngOnInit() {
  }

}
