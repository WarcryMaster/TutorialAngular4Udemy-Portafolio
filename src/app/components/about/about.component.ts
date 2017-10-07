import { InformationService } from '../../services/information/information.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent {
  constructor(public _is:InformationService){}
}
