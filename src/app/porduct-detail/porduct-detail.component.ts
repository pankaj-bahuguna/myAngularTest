import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.modal';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-porduct-detail',
  templateUrl: './porduct-detail.component.html',
  styleUrls: ['./porduct-detail.component.scss'],
})
export class PorductDetailComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  product: Product;
  cartItems = [];
  constructor(private route: ActivatedRoute,
              private productservice: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.product = this.productservice.getProduct(this.id);
   });

  }
  goBack() {
    this.router.navigate(['product-list']);
  }
  add(product){
    this.productservice.additem(product);
  }
  buyProduct(){
    alert('Product successfully purchased');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
