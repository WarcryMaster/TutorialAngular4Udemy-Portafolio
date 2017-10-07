import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {

  products:any[] = []
  areProductsLoaded:boolean = false;

  constructor(private http:Http) { 
    this.loadProducts();
  }

  private loadProducts(){
    if (this.products.length === 0) {
      this.http.get("https://tutorialangular4.firebaseio.com/productos_idx.json")
      .subscribe(data=>{
        this.products = data.json();
        this.areProductsLoaded = true;
      });
    }
  }

}
