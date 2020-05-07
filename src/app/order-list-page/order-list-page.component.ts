import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { Product } from '../product';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.component.html',
  styleUrls: ['./order-list-page.component.css']
})
export class OrderListPageComponent implements OnInit {
  items: Product[];
  subTotal: number;
  tax: number;
  total:number;
  
  
  constructor(private DataInteractionService: DataInteractionService) { }
  
  ngOnInit(): void {
    this.items = this.DataInteractionService.getCart();
    this.subTotal = this.DataInteractionService.getSubTotal();
    this.tax = this.DataInteractionService.getTax();
    this.total = this.DataInteractionService.getTotal();
  }

  remove(index: number){
    this.DataInteractionService.removeItem(index);
    this.ngOnInit();
  }

}
