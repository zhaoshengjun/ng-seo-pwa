import { ProductResolver } from "./resolvers/product.resolver";
import { ProductsResolver } from "./resolvers/products.resolver";
import { ProductListComponent } from "./../products/containers/product-list/product-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "../products/containers/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: "",
    component: ProductListComponent,
    resolve: { products: ProductsResolver }
  },
  {
    path: ":id",
    component: ProductDetailComponent,
    resolve: { product: ProductResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
