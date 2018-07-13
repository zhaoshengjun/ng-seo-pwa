import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UiModule } from './ui/ui.module';
import { ProductListComponent } from './products/containers/product-list/product-list.component';
import { ProductDetailComponent } from './products/containers/product-detail/product-detail.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductDetailComponent],
  imports: [BrowserModule, AppRoutingModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
