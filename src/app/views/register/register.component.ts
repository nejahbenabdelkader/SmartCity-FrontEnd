import { Component, Injectable, NgZone } from '@angular/core';
import {Observable,throwError }from 'rxjs';
import {catchError , map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {PersonneService} from 'src/app/services/personne.service'
import { Personne } from 'src/app/personne';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  MemberForm : FormGroup ;
  personne=new Personne();
  constructor(private formBuilder: FormBuilder, private PersonneService:PersonneService , private ngZone:NgZone,private router:Router) { }
  register(){
   this.PersonneService.register(this.personne).subscribe(
         (res)=>{ 
           console.log('Member successfully created')
           
         },(error)=>{
           console.log(error);
         }
 
       );

}}
