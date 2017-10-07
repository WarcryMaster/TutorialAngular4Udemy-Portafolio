import { ProductService } from '../../services/product/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent {

  constructor(private _ps:ProductService){}

}
