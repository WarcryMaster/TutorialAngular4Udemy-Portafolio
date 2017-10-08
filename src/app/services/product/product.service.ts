import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {

  products:Product[] = []
  filteredProducts:Product[] = []
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

  public loadFilteredProducts(text:string){
    if (this.products.length > 0){
      this.filteredProducts = this.products.filter(product=>{
        return product.categoria.toLowerCase().includes(text.toLowerCase()) || product.titulo.toLowerCase().includes(text.toLowerCase());
      });
    }
  }

  public loadProduct(productCod:string) {
    return this.http.get(`https://tutorialangular4.firebaseio.com/productos/${productCod}.json`);
  }
}
