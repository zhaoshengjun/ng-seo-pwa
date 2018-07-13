import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Product } from "../../../product/models/product";
import { map } from "rxjs/operators";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .pipe(map(data => data["products"]))
      .subscribe(res => (this.products = res));
  }
}
