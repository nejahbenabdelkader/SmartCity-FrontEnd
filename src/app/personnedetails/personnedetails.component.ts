import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personnedetails',
  templateUrl: './personnedetails.component.html',
  styleUrls: ['./personnedetails.component.scss']
})
export class PersonnedetailsComponent implements OnInit {

  id: number;
  personne: Personne;
  constructor(private route: ActivatedRoute,private router: Router,
    private personneService: PersonneService) { }

    ngOnInit() {
      this.personne = new Personne();
  
      this.id = this.route.snapshot.params['id'];
      
      this.personneService.getpersonne(this.id)
        .subscribe(data => {
          console.log(data)
          this.personne = data;
        }, error => console.log(error));
    }
  
    list(){
      this.router.navigate(['/dashboard']);
    }
  }