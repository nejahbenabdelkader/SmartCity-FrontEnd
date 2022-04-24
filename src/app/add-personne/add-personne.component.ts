import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.scss']
})
export class AddPersonneComponent implements OnInit {

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
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Personne']);
  }
}
 

