import { Component } from '@angular/core';
import { InformationService } from '../../service/information.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(public _is:InformationService){}
}
