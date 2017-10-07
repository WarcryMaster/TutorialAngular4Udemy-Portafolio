import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class InformationService {

  info:any = {};
  team:any[] = [];
  isInfoLoaded:boolean = false;
  isTeamLoaded:boolean = false;

  constructor(public http:Http) {
    this.loadInfo();
    this.loadTeam();
   }

   public loadInfo(){
    this.http.get("assets/data/info.page.json")
    .subscribe(data=>{
      this.info = data.json();
      this.isInfoLoaded = true;
    });
   }

   public loadTeam(){
    this.http.get("https://tutorialangular4.firebaseio.com/equipo.json")
    .subscribe(data=>{
      this.team = data.json();
      this.isTeamLoaded = true;
    });
   }

}
