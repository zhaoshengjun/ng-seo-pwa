import { Product } from './../../../product/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product.id = this.route.snapshot.paramMap.get('id');
  }

}
