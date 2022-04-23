import { Injectable, NgZone } from '@angular/core';
import {Observable,throwError }from 'rxjs';
import {catchError , map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  baseUrl = "http://localhost:8083/api/v1/Personne/"; 
  constructor(private http: HttpClient,
    public router: Router) {
   }
   register(data: any):Observable<any>{
     return this.http.post(this.baseUrl , data);

}
}
