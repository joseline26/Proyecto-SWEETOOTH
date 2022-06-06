import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './Services/products.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { TarjetaCarritoComponent } from './Components/tarjeta-carrito/tarjeta-carrito.component';
import { AboutComponent } from './Components/about/about.component';
import { TemplateComponent } from './Components/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductsComponent,
    ProductListComponent,
    SubscribeComponent,
    CarritoComponent,
    TarjetaCarritoComponent,
    AboutComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
