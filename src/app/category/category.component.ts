import { Component, OnInit } from '@angular/core';
import {MENU} from '../mock-menu';
import {Product} from '../product';
import { DataInteractionService } from '../data-interaction.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products : Product[];

  total : number;

  constructor(private data : DataInteractionService) { }

  ngOnInit(): void {
    this.total = this.data.getSubTotal();
    this.products = this.data.getMenuFromCategory();
  }

  add(product){
    this.data.AddToCart(product)
    this.total = this.data.getSubTotal();
  }

}
