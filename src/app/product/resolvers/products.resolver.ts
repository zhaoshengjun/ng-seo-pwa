import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Resolve } from "@angular/router";
import { ProductService } from "../services/product.service";

@Injectable({
  providedIn: "root"
})
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private productSrv: ProductService) {}

  resolve() {
    return this.productSrv.getProducts();
  }
}
