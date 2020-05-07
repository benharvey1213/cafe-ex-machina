import { Injectable } from '@angular/core';
import { Product } from './product';
import { MENU } from './mock-menu'

@Injectable({
  providedIn: 'root'
})
export class DataInteractionService {
  menu = MENU;

  // https://www.breadandcie.com/the-cafe/cafemenupage/
  // pullin crap off this random website (Ben)
  // we also need a definitive list of categories so we're consistent with the category field

  currentShoppingCart : Product[];
  currentTotal : number = 0; 

  getTotal(): number{
    let total = 0;
    for(let i=0; i < this.currentTotal; i++)
      this.currentShoppingCart[i].price += total;
    return total; //TODO: format total as a $ amount will return a string instead of number
  }

  getCart(): Product[]{
    return this.currentShoppingCart;
  }

  constructor() { }

  

}
