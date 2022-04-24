import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.scss']
})
export class UpdatePersonneComponent implements OnInit {

  id: number;
  personne: Personne;
  MemberForm : FormGroup ;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,
    private personneService: PersonneService) { }

  ngOnInit(): void {
    this.personne = new Personne();

    this.id = this.route.snapshot.params['id'];
    
    this.personneService.getpersonne(this.id)
      .subscribe(data => {
        console.log(data)
        this.personne = data;
      }, error => console.log(error));
  }
  updatepersonne() {
    this.personneService.updatepersonne(this.id, this.personne)
      .subscribe(data => {
        console.log(data);
        this.personne = new Personne();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updatepersonne();    
  }

  gotoList() {
    this.router.navigate(['dashboard']);
  }
}
