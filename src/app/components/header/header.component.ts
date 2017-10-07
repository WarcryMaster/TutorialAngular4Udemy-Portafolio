import { InformationService } from '../../services/information/information.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(public _is:InformationService){}
}
