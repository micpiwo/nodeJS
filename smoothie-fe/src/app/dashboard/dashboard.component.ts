import { Component, OnInit, Input } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nom = 'MICHEL '
  prenom = 'Michael'
  age = 34

  @Input() smoothie;
  //variable (enderscore pour différencié de la fonctionen dessous) = le type (les 2 points) == sera un tableau
  private _smoothies: Smoothie[];



  constructor(
    //Import de l'interface du services smoothie.service
    private smoothieService: SmoothieService

  ) 
  {
    
   }

  ngOnInit() {
    this.getAllSmoothies();
  }


  //Appel de l'obet et récupératoin de toutes la collections
  set smoothies(mySmoothie: any){
    this._smoothies = mySmoothie;
  }

  get smoothies():any{
    return this._smoothies;
  }

  //Fonction d'appel de toutes la collection
  getAllSmoothies(): void{
    //Appel du getter
    this.smoothieService.getSmoothies()
    //inscription au Observable => gestion asyncrone
    .subscribe((listSmoothie) =>{
      this.smoothies = listSmoothie;
    })
  }


}
