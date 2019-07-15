import { Component, OnInit } from '@angular/core';
import {  Users, UsersService} from '../users.service';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    //puis objet userId de type chaine de caractère
    private _userId: string;
  //On recup objet user vide
  private _users: Users;


  constructor(
    //La route activée
    private route: ActivatedRoute,
    //Appel du user service
    private usersService: UsersService,
  
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("id");
    this.getUserDetails();
  }

    //Setter et Getter ID
    set userId(myUserId: any){
      this._userId = myUserId;
    }

    get userId(){
      return this._userId;
    }


  //Setter et Getter
  set users(myUsers: any){
    this._users = myUsers;
  }

  get users(){
    return this._users;
  }

  //Récuperation des utilisateur
  /*
  getAllUsers(): any{
    this.usersService.getUsers().subscribe((ListUser) => {
      this.users = ListUser;
      console.log(ListUser);
    });
  }
  */
  

  //Recup de utilisateur par id
  getUserDetails():void{
    this.usersService.getOneUser(this.userId)
    .subscribe((userDetail) => {
      this.users = userDetail;
      console.log(userDetail);
    });
  }
}
