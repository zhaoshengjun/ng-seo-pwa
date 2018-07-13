import { ProductDetailComponent } from './../products/containers/product-detail/product-detail.component';
import { ProductListComponent } from './../products/containers/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent, ProductDetailComponent, ProductsComponent]
})
export class ProductModule { }
