import { Component, OnInit, Input } from '@angular/core';
import {  Users, UsersService} from '../users.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

private _users: Users[];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  //Setter et Getter
  set users(myUsers: any){
    this._users = myUsers;
  }

  get users(){
    return this._users;
  }

  //Récuperation des utilisateur
  getAllUsers(): any{
    this.usersService.getUsers().subscribe((ListUser) => {
      this.users = ListUser;
      console.log(ListUser);
    });
  }
}
