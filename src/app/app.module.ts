import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdcutListComponent } from './prodcut-list/prodcut-list.component';
import { PorductDetailComponent } from './porduct-detail/porduct-detail.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    ProdcutListComponent,
    PorductDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
