import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @Input() data:any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log('cart')
    this.productService.addToCart(this.data);
  }
}
