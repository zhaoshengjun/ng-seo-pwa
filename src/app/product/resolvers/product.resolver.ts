import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ProductService } from "../services/product.service";

@Injectable({
  providedIn: "root"
})
export class ProductResolver implements Resolve<Product> {
  constructor(private productSrv: ProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get("id");
    return this.productSrv.getProduct(id);
  }
}
