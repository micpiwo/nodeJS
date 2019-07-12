import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SmoothieService, Smoothie } from '../smoothie.service';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';


@Component({
  selector: 'app-smoothies-form',
  templateUrl: './smoothies-form.component.html',
  styleUrls: ['./smoothies-form.component.css']
})
export class SmoothiesFormComponent implements OnInit {
  //Ajout des valeurs de la collections
  private _smoothies: Smoothie = {
    title: '',
    ingredients:[
      {
        nom:'',
        quantite:''
      }
    ],
    features:[
      {
        cost:'',
        prepareTime:''
      }
    ],
    advice:'',
    description:'',
    steps:[
      {
        stepText:''
      }
    ]
  }
//Init du form group => valeurs et validation de form control instance
//A appeler dans le form html
  smoothieForm: FormGroup;

  constructor(
    private smoothieService: SmoothieService,
    private fb: FormBuilder
  ) { }
//Appel des fonction du bas
  ngOnInit() {
    this.getAllSmoothies();
    this.buildForm();
  }


  //Appel de l'obet et récupératoin de toutes la collections
  set smoothies(mySmoothie: any){
    this._smoothies = mySmoothie;

  }

  get smoothies(){
    return this._smoothies;
  }

  get myForm(){
    return this.smoothieForm.controls;
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

  //constriction du form
  buildForm(){
    this.smoothieForm = this.fb.group({
      hideRequire: false,
      floatLabel: 'auto',
      title:['', Validators.required],
      //ici on joute tous les champs
    });  
  }


  onSubmit() {
    // stop here if form is invalid
    if (this.smoothieForm.invalid) {
      return;
    } else {
      this.smoothies.title = this.myForm.title.value;
      this.addSmoothie(this.smoothies);
      // console.log(this.smoothie);
    }
  }

  addSmoothie(smoothie: Smoothie) {
    this.smoothieService.addSmoothie(smoothie)
      .subscribe( (lastInsertSmoothie) => {
        console.log('smoothie inséré', lastInsertSmoothie);
      });
  }


}