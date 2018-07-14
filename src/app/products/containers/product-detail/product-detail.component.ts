import { Product } from "./../../../product/models/product";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, tap } from "rxjs/operators";
import { UiService } from "../../../ui/services/ui.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(private route: ActivatedRoute, private ui: UiService) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");

    this.route.data
      .pipe(
        map(data => data["product"]),
        tap(product => this.metaData(product))
      )
      .subscribe(product => (this.product = product));
  }

  metaData(product: Product) {
    this.ui.setMetaData({
      title: `${product.name} for only ${product.price}`,
      description: product.description,
      image: product.image
    });
  }
}
