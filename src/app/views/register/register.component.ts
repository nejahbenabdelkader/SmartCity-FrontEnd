import { Component, Injectable, NgZone } from '@angular/core';
import {Observable,throwError }from 'rxjs';
import {catchError , map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {PersonneService} from './app/services'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  MemberForm : FormGroup ;
  constructor(private formBuilder: FormBuilder, private PersonneService:PersonneService , private ngZone:NgZone,private router:Router) { }
  register(){
  if(this.MemberForm.invalid)
     {return;}
     else{
   this.PersonneService.register(this.MemberForm.value).subscribe(
         (res)=>{ 
           console.log('Member successfully created')
           
         },(error)=>{
           console.log(error);
         }
 
       );

}}
