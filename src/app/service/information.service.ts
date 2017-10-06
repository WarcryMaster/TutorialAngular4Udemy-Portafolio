import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class InformationService {

  info:any = {};
  about:any = {};
  isInfoLoaded:boolean = false;
  isAboutLoaded:boolean = false;
  team:any = [];

  constructor(public http:Http) {
    this.loadInfo();
   }

   public loadInfo(){
    this.http.get("assets/data/info.page.json")
    .subscribe(data=>{
      this.info = data.json();
      this.isInfoLoaded = true;
    });
   }

   public loadAbout(){
    this.http.get("https://tutorialangular4.firebaseio.com/equipo.json")
    .subscribe(data=>{
      this.about = data;
      this.isAboutLoaded = true;
    });
   }

}
