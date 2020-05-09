import { Component, OnInit, Input } from '@angular/core';
import {DataInteractionService} from '../data-interaction.service';
import {Product} from '../product'


@Component({
  selector: 'app-food-desc',
  templateUrl: './food-desc.component.html',
  styleUrls: ['./food-desc.component.css']
})
export class FoodDescComponent implements OnInit {

  @Input() product: Product;


  constructor(private dataService: DataInteractionService) { }

  ngOnInit(): void {

  }

  
  getProduct(): void{
    
  }

  AddToOrder(product : Product): void{
    this.dataService.AddToCart(product)
  }

}
