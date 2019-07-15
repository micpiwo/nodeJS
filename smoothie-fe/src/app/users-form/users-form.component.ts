import { Component, OnInit } from '@angular/core';
import {  Users, UsersService} from '../users.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
 
@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})


export class UsersFormComponent implements OnInit {
 
  title = new FormControl();

  private users: Users = {
    picture: '',
    age: null,
    eyeColor:'',
    name:[
      {
        first: ''
      },
      {
        last: ''
      },
    ],
    compagny:'',
    email:'',
    phone:'',

  };
  constructor() { }

  ngOnInit(
   
  ) {
  }

}
