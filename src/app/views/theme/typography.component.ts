import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Personne } from 'src/app/personne';
import { PersonneService } from 'src/app/services/personne.service';
import { UpdatePersonneComponent } from 'src/app/update-personne/update-personne.component';

@Component({
  templateUrl: 'typography.component.html'
})
export class TypographyComponent {
  personnes: Observable<Personne[]>;

  constructor(private personneService: PersonneService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.personnes = this.personneService.getpersonneList();
  }

  deletepersonne(id: number) {
    this.personneService.deletepersonne(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  personneDetails(id: number){
    this.router.navigate(['detail',id]);
  }

  updatepersonne(id: number){
    this.router.navigate(['updatepersonne',id]);
  }
}