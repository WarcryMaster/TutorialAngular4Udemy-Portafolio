import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {

  cod:string  = undefined
  product:any = undefined

  constructor(private activatedRoute:ActivatedRoute,
              private _ps:ProductService){
    activatedRoute.params.subscribe(params=>{
      this.cod = params['id'];
      this._ps.loadProduct(this.cod).subscribe(data=>{
        this.product = data.json();
      });
    });
  }

}
