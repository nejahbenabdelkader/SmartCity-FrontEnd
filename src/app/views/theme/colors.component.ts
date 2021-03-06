import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { Personne } from 'src/app/personne';
import { PersonneService } from 'src/app/services/personne.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {
  personne: Personne = new Personne();
  submitted = false;
  constructor(private Personneservice:PersonneService,private router: Router) {} 
  ngOnInit(): void {
  }

  newPersonne(): void {
    this.submitted = false;
    this.personne = new Personne();
  }

  save() {
    this.Personneservice
    .create(this.personne).subscribe(data => {
      console.log(data)
      this.personne = new Personne();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.personne.role="Employe";
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/dashboard']);
  }
}