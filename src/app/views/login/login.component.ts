import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from 'src/app/personne';
import {AuthentificationService} from 'src/app/services/authentification.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user = new Personne();
  EmailS:string="";
  PassS:string="";
  formlogin:FormGroup;
  submitted=false;
  
  constructor(public authServ:AuthentificationService, public router:Router,public fb: FormBuilder){
    this.formlogin=this.fb.group(
      {
        email:['',Validators.required],
        mot_de_pasee:['',Validators.required]
      }
    )
  }
  loginUser(){
    this.submitted=true;
    console.log(this.EmailS)
    if(this.formlogin.invalid)
    {
      return;
    }
    this.authServ.login(this.EmailS,this.PassS).subscribe(
      data =>{
        
        console.log("login success")
        this.user=data;
        console.log(this.user.token);
        this.router.navigate(['/dashboard']);
      },
      error =>{
        console.log(error)
        
        this.submitted=false
        this.formlogin.reset()
      }
    )
  }
  register()
  {
    this.router.navigate(['/register'])
  }
 }
