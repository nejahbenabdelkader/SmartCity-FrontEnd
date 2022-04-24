import { Component } from '@angular/core';
import { SmsService } from 'src/app/services/sms.service';

@Component({
  templateUrl: 'brand-buttons.component.html'
})
export class BrandButtonsComponent {

  constructor(public Smsservice:SmsService) { }
  public smssender(){
    this.Smsservice.smssender();
  }

}
