import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class InformationService {

  info:any = {};
  team:any[] = [];
  isInfoLoaded:boolean = false;
  isTeamLoaded:boolean = false;

  constructor(private http:Http) {
    this.loadInfo();
    this.loadTeam();
   }

   private loadInfo(){
     if (this.info.title === undefined){
      this.http.get("assets/data/info.page.json")
      .subscribe(data=>{
        this.info = data.json();
        this.isInfoLoaded = true;
      });
    }
   }

   private loadTeam(){
     if (this.team.length === 0) {
      this.http.get("https://tutorialangular4.firebaseio.com/equipo.json")
      .subscribe(data=>{
        this.team = data.json();
        this.isTeamLoaded = true;
      });
     }
   }

}
