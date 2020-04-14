import {
  EventEmitter,
  Output
} from '@angular/core';
import {
  Product
} from './product.modal';

export class ProductService {
  @Output() removeItem = new EventEmitter();
  private products: Product[] = [
    new Product(1, 'mobile', 50, 10, 'about card'),
    new Product(2, 'Head Phone', 750, 100, 'about pen'),
    new Product(3, 'Power Bank', 100, 5, 'about power')
  ];
  cartItems: Product[] = [];


  constructor() {
    console.log(this.cartItems);
  }
  getProducts() {
    return this.products;
  }
  getProduct(id: number) {
    return this.products.find(item => item.id === id);
  }
  additem(item: Product) {
    if (this.cartItems.find(ob => ob.id === item.id)) {
      alert('item already added');
    } else {
      this.cartItems.push(item);
    }
  }
  getCart() {
    return this.cartItems;
  }
  deleteItem(index) {
    this.cartItems.splice(index, 1);
  }
}
