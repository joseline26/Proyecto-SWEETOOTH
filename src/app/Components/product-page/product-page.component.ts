import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Producto } from 'src/app/Model/product';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  @Input() data:any;
  public id: any;
  constructor(public productService: ProductsService, private  route: ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.productService.getProducts());
    this.getProducts();

    this.route.queryParams.subscribe((params:Params)=> {
      this.id=params['id'];
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.productService.products = res;
        console.log(this.productService.products);
      },
      err =>{
        console.log(err);
      }
    )
  }

  goToPage(item:Producto): boolean {
    if(item.id===this.id) return true; else return false;
  }

}
