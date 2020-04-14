import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() element: {id: number, name: string};
  @Input() index;
  // @Output() removeItem = new EventEmitter();
  cartItems = [];
  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.cartItems = this.productservice.getCart();
  }

  RemoveToCart() {
    this.productservice.removeItem.emit(this.index);
  }

}
