import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {

  constructor(private activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe(params=>{
      console.log(params);
    });
  }

}
