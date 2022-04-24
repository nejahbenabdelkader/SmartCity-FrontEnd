import { Component } from '@angular/core';
import { SmsService } from 'src/app/services/sms.service';

@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {

  constructor(public Smsservice:SmsService) { }
  public smssender(){
    this.Smsservice.smssender();
  }


}
