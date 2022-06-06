
import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() data:any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log('cart')
    this.productService.addToCart(this.data);
  }

}