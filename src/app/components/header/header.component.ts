import { Router } from '@angular/router';
import { InformationService } from '../../services/information/information.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  constructor(public _is:InformationService,
              private router:Router){}

  public searchProduct(text:string){
    this.router.navigate(['search', text]);
  }

}
