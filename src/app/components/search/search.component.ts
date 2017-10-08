import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  text:string = undefined

  constructor(public _ps:ProductService,
              private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(
      params=>{this._ps.loadFilteredProducts(params['text']);}
    );
   }

}
