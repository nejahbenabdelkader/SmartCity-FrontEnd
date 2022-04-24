import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  constructor(private http: HttpClient,
    public router: Router) { }
    public smssender(){
      return this.http.post("http://localhost:8083/api/v1/Sms",{ title: 'Angular POST Request Example' });
    }
}
