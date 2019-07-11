
import { Component, OnInit, Input } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';
@Component({
  selector: 'app-smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.css']
})
export class SmoothiesComponent implements OnInit {

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

  get smoothies(){
    return this._smoothies;
  }

  //Fonction d'appel de toutes la collection
  getAllSmoothies(): any{
    //Appel du getter
    this.smoothieService.getSmoothies()
    //inscription au Observable => gestion asyncrone
    .subscribe((listSmoothie) =>{
      this.smoothies = listSmoothie;
    })
  }


}
