import { Product } from './../../../product/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../product/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(private route: ActivatedRoute,private productSrv:ProductService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.productSrv.getProduct(id)
      .subscribe(product => this.product = product);
  }

}
