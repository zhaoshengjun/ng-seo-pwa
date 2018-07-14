import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Product } from "../../../product/models/product";
import { map, tap } from "rxjs/operators";
import { UiService } from "../../../ui/services/ui.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];

  constructor(private route: ActivatedRoute, private ui: UiService) {}

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data["products"]),
        tap(products => this.metaData(products))
      )
      .subscribe(res => (this.products = res));
  }

  metaData(products: Product[]) {
    this.ui.setMetaData({
      title: "Products",
      description: `Check out our collection of ${products.length} products`
    });
  }
}
