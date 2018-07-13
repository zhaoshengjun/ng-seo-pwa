import { ProductListComponent } from './../products/containers/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../products/containers/product-detail/product-detail.component';

const routes: Routes = [{
  path:"",
  component: ProductListComponent
},{
  path:":id",component: ProductDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
