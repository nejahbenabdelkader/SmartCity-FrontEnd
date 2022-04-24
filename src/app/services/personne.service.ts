import { Injectable, NgZone } from '@angular/core';
import {Observable,throwError }from 'rxjs';
import {catchError , map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Personne } from '../personne';

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
getpersonne(id: number): Observable<any> {
  return this.http.get(this.baseUrl+""+id);
}

create(personne: Object): Observable<Object> {
  return this.http.post(this.baseUrl, personne);
}

updatepersonne(id: number, value: any): Observable<Object> {
  return this.http.put(this.baseUrl+""+id, value);
}

deletepersonne(id: number): Observable<any> {
  console.log(id);
  return this.http.delete(this.baseUrl+""+id, { responseType: 'text' });
}

getpersonneList(): Observable<any> {
  return this.http.get(this.baseUrl);
}}