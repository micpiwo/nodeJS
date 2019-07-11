import { Component, OnInit, Input } from '@angular/core';

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
  

  title: string

  constructor() { }

  ngOnInit() {
    this.title = "Un titre depuis ngOnInit()";
  }



}
