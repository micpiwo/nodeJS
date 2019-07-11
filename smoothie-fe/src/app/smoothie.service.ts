import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/*INTERFACE en dehors de la classe*/
/*Appel d'un smoothie*/
export interface Smoothie{

}

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {
  /*Appel du fichier environment.ts et de la fonction apiURL => localhost 3000 connexion au backend*/
  private environment = environment.apiUrl;

  constructor( 
    /*Appel de donnée angular des imports*/
    private http = HttpClient,
    private router = Router) 
    { 


    }
}
