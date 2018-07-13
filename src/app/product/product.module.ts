import { ProductDetailComponent } from './../products/containers/product-detail/product-detail.component';
import { ProductListComponent } from './../products/containers/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent, ProductDetailComponent]
})
export class ProductModule { }
