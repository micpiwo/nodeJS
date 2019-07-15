import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Users{
    //Init de l'objet
    _id?: String;
    picture?: String;
    age?: Number;
    eyeColor?: String;
    name?:[
      {
        first?: String;
      },
      {
        last?: String;
      }
    ];
    compagny?:String;
    email?: String;
    phone?: String;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //Appel du fichier environment connexion a mongoDB
  private apiUrl = environment.apiUrl;
  //Init constructeur
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  //Recup tous les utilisateur
  getUsers(): Observable<Users[]>{
    const usersListUrl = `${this.apiUrl}/smoothie/users`;
    return this.http.get<Users[]>(usersListUrl);
  }

  //Recup un user par ID
  getOneUser(id: String): Observable<Users>{
    const getUrl = `${this.apiUrl}/smoothie/users/${id}`;
    console.log(getUrl);
    return this.http.get<Users>(getUrl);
  }

  //Ajouter un utilisateur
  addUsersService(users: Users){
    const addUrl = `${this.apiUrl}/smoothie/users/add}`;
    return this.http.post<Users>(addUrl, users);
  }
}
