import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {

  product:any = undefined

  constructor(private activatedRoute:ActivatedRoute,
              private _ps:ProductService){
    activatedRoute.params.subscribe(params=>{
      _ps.loadProduct(params['id']).subscribe(data=>{
        this.product = data.json();
      });
    });
  }

}
