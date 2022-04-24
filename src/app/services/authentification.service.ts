import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../personne';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private http:HttpClient) { }
  public login(email,pass):Observable<any>{
    
    return this.http.get('http://localhost:8083/auth/login',{params:{email:email,pass:pass}});
  }
}
