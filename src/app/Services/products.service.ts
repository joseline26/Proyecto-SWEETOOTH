import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Model/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  queryParams: any;
  openPage(data: any) {
    throw new Error('Method not implemented.');
  }
  API_URL="http://localhost:3000/api/productos";
  products: Producto[] = [];
  add_items: Producto[] = [];
  remove_items: Producto [] = [];
  constructor(private http:HttpClient) { 
    this.add_items=[]
    this.remove_items=[]
  }

  getProducts(){
    return this.http.get<Producto[]>(this.API_URL);
  }

  getCart(){
    return this.add_items = JSON.parse(localStorage.getItem('carrito') || '{}')
  }

  addToCart(item: Producto){
    item.qty_c = 1

    if(localStorage.getItem('carrito') === null){
    this.add_items?.push(item);
    localStorage.setItem('carrito', JSON.stringify(this.add_items))
  }
  else if(this.isDuplicated(item.id)){
    this.add_items = JSON.parse(localStorage.getItem('carrito') || '{}')
    this.add_items[this.isDuplicatedId(item.id)].qty_c++;
    localStorage.setItem('carrito', JSON.stringify(this.add_items))
  }
  else{
    this.add_items?.push(item);
    localStorage.setItem('carrito', JSON.stringify(this.add_items))
  }
  console.log(this.add_items)
  }
  isDuplicated(id:any){
    for(var i=0;i<=this.add_items.length -1;i++){
      if(id === this.add_items[i].id){
        return true;
      }
    }
    return false;
  }
  
  isDuplicatedId(id:any){
    for(var i=0;i<=this.add_items.length -1;i++){
      if(id === this.add_items[i].id){
        return i;
      }
    }
    return 0;
  }

  removeFromCart(item: Producto){
    item.qty_c = 1

    if(localStorage.getItem('carrito') === null){
    this.remove_items?.push(item);
    localStorage.setItem('carrito', JSON.stringify(this.remove_items))
  }
  else if(this.isDuplicated2(item.id)){
    this.remove_items = JSON.parse(localStorage.getItem('carrito') || '{}')
    this.remove_items[this.isDuplicatedId2(item.id)].qty_c--;
    localStorage.setItem('carrito', JSON.stringify(this.remove_items))
  }
  else{
    this.remove_items?.push(item);
    localStorage.setItem('carrito', JSON.stringify(this.remove_items))
  }
  console.log(this.remove_items)
  }
  isDuplicated2(id:any){
    for(var i=0;i<=this.add_items.length -1;i++){
      if(id === this.add_items[i].id){
        return true;
      }
    }
    return false;
  }
  
  isDuplicatedId2(id:any){
    for(var i=0;i<=this.add_items.length -1;i++){
      if(id === this.add_items[i].id){
        return i;
      }
    }
    return 0;
  }

}
