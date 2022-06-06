import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @Input() data:any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    console.log(this.productService.getCart())
  }

  addToCart(){
    console.log('cart')
    this.productService.addToCart(this.data);
  }

}
