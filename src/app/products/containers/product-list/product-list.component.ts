import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product/models/product';
import { ProductService } from '../../../product/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = []

  constructor(private productSrv: ProductService) { }

  ngOnInit() {
    this.productSrv.getProducts().subscribe(products => this.products = products);
  }

}
