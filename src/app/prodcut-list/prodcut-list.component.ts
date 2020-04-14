import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.modal';

@Component({
  selector: 'app-prodcut-list',
  templateUrl: './prodcut-list.component.html',
  styleUrls: ['./prodcut-list.component.scss'],
})
export class ProdcutListComponent implements OnInit {
  cartItems = [];
  products: Product[];
  constructor(private productservice: ProductService) { }

  ngOnInit() {
   this.products = this.productservice.getProducts();
   this.cartItems = this.productservice.getCart();
   this.productservice.removeItem.subscribe(res => {
     this.removeCart(res);
   });
  }

  addToCart(product) {
    this.productservice.additem(product);
  }

  removeCart(index) {
    this.productservice.deleteItem(index);
    this.cartItems = this.productservice.getCart();
  }

}
