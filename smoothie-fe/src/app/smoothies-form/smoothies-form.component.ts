import { Component, OnInit } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-smoothies-form',
  templateUrl: './smoothies-form.component.html',
  styleUrls: ['./smoothies-form.component.css']
})
export class SmoothiesFormComponent implements OnInit {

  title = new FormControl();
  //Ajout des valeurs de la collections
  public smoothie: Smoothie = {
    title: '',
    ingredients: [
      {
        nom: '',
        quantite: '',
      }
      ],
    features: [
    {
      cost:'',
      prepareTime: '',
    },
    ],
    advice: '',
    description: '',
    steps: [
      {
        stepText: '',
      }
      ]
    };
//Init du form group => valeurs et validation de form control instance
//A appeler dans le form html

  
  constructor(
    private smoothieService: SmoothieService,
    private fb: FormBuilder,
  ) { }
  smoothieForm: FormGroup;
//Appel des fonction du bas
  ngOnInit() {
    
    this.getAllSmoothies();
    //Appel de la fonction buildForm
    this.buildForm();
  }


  //Appel de l'obet et récupératoin de toutes la collections
  set smoothies(mySmoothie: any){
    this.smoothie = mySmoothie;

  }

  get smoothies(){
    return this.smoothie.title;
  }

  get myForm() {
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
  public buildForm() {
    this.smoothieForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      title: ['', Validators.required]
    });
  }


  public onSubmit(smoothies: Smoothie) {
    // stop here if form is invalid
    if (this.smoothieForm.invalid) {
      return;
    } else {
      this.smoothie.title = this.myForm.title.value;
      this.addSmoothie(this.smoothie);
    }
  }

  addSmoothie(smoothie: Smoothie) {
    //Appel du services
    this.smoothieService.addSmoothieService(smoothie)
      .subscribe( (lastInsertSmoothie) => {
        console.log('smoothie inséré', lastInsertSmoothie);
    
      });
  }
}