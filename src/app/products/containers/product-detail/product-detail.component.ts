import { Product } from "./../../../product/models/product";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");

    this.route.data
      .pipe(map(data => data["product"]))
      .subscribe(product => (this.product = product));
  }
}
