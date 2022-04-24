import {Component, OnDestroy} from '@angular/core';
import { SmsService } from 'src/app/services/sms.service';

@Component({
  templateUrl: 'dropdowns.component.html',
  styleUrls: ['dropdowns.component.css']
})
export class DropdownsComponent {
  constructor(public Smsservice:SmsService) { }
  public smssender(){
    this.Smsservice.smssender();
  }
 
}
