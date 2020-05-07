import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataInteractionService {

  // https://www.breadandcie.com/the-cafe/cafemenupage/
  // pullin crap off this random website (Ben)
  // we also need a definitive list of categories so we're consistent with the category field

  inventoryList : Product[] = [
    new Product('Breakfast Pizza', 12, 'Including eggs, bacon, parmesan cheese and green onion on top of our House-made Pizza Bread', 'categoryName??', ''),
  ];

  currentShoppingCart : Product[];
  currentTotal : number = 0;

  constructor() { }

  

}
