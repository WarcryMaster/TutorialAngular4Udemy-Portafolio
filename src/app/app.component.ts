import { ProductService } from './services/product/product.service';
import { Component } from '@angular/core';
import { InformationService } from "./services/information/information.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( public _is:InformationService, 
               public _ps:ProductService){}
  
}
