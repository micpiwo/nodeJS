import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Router } from '@angular/router';
/*Pour utilise le services doit etre subscibe*/
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


/*INTERFACE en dehors de la classe*/
/*Appel d'un smoothie*/
export interface Smoothie{
  _id?:String;
  title?:String;
ingredients?: [
    {
    nom?:String;
    quantite?:String;   
    }
];
features?: [
      {
       cost?:String;
       prepareTime?:String;
       }
];
advice?:String;
description?:String;
steps?:[
    {
        stepText?:String;
    }    
]; 
}

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {
  /*Appel du fichier environment.ts et de la fonction apiURL => localhost 3000 connexion au backend*/
  private apiUrl = environment.apiUrl;

  
  constructor( 
    /*Appel de donnée angular des imports*/
    private http: HttpClient,
    private router: Router)
    { }
    // Get all Smoothie
  getSmoothies(): Observable<Smoothie[]> {
    const smoothieListUrl = '${this.apiUrl}/listes';
    return this.http.get<Smoothie[]>(smoothieListUrl);
  }

    
  }


