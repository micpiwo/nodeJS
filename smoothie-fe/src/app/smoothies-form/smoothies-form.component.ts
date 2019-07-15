import { Component, OnInit } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-smoothies-form',
  templateUrl: './smoothies-form.component.html',
  styleUrls: ['./smoothies-form.component.css']
})
export class SmoothiesFormComponent implements OnInit {
  //Ajout des valeurs de la collections
  smoothie: Smoothie = {
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
    this.smoothie = mySmoothie;

  }

  get smoothies(){
    return this.smoothie;
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
  private buildForm() {
    this.smoothieForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      title: ['', Validators.required],
    });
  }


  onSubmit() {
    // stop here if form is invalid
    if (this.smoothieForm.invalid) {
      return;
    } else {
      this.smoothie.title = this.myForm.title.value;
      this.addSmoothie(this.smoothie);
      // console.log(this.smoothie);
    }
  }

  addSmoothie(smoothies: Smoothie) {
    //Appel du services
    this.smoothieService.addSmoothieService(smoothies)
      .subscribe( (lastInsertSmoothie) => {
        console.log('smoothie inséré', lastInsertSmoothie);
        console.log(this.smoothies.title);
      });
  }
}