
import { Component, OnInit, Input } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private _smoothiesId: string;
  private _smoothie: Smoothie;

  constructor(
    private route: ActivatedRoute,
    private smoothieService: SmoothieService,
  
  ) { }

  ngOnInit() {
    
    this.smoothiesId = this.route.snapshot.paramMap.get('id');
    this.getSmoothiesDetail();
  }

  //Appel de l'obet et récupération d'un id
  set smoothiesId(mySmoothieId: any){
    this._smoothiesId = mySmoothieId;
  }

  get smoothiesId(){
    return this._smoothiesId;
  }
//Recuperation de toute la collection
  set smoothie(mySmoothie: any){
    this._smoothie = mySmoothie;
  }

  get smoothie(){
    return this._smoothie;
  }

  getSmoothiesDetail():void {
    this.smoothieService.getOneSmoothie(this.smoothiesId)
      .subscribe( (smoothieDetail) => {
        this.smoothie = smoothieDetail;
        console.log(this.smoothie);
      });
  }
}


  


