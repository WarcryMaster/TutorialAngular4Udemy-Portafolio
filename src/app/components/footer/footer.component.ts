import { InformationService } from '../../services/information/information.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  year:number = new Date().getFullYear();

  constructor(public _is:InformationService){}
  
}
