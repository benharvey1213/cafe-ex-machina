import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataInteractionService } from '../data-interaction.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  currentSelection : number;

  name : string;
  cardNumber : number;
  expirationDate : Date;
  securityCode : number;
  billingAddress : string;

  error : boolean = false;

  constructor(private router : Router, private dataInteraction : DataInteractionService) { }

  ngOnInit(): void {
    this.currentSelection = 0;
  }

  

  card(){
    this.currentSelection = 1;
  }

  cash(){
    this.currentSelection = 2;
  }

  continue(){
    if (this.currentSelection == 1){
      if (this.name != '' && this.cardNumber != null && this.expirationDate != null && this.securityCode != null && this.billingAddress != ''){
        // interact with service
        this.router.navigateByUrl('status');
      } else {
        this.error = true;
      }


      
    } else {
      // interact with service
      this.router.navigateByUrl('status');
    }
  }

}
