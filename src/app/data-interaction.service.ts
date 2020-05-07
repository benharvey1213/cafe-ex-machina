import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataInteractionService {

  inventoryList : Product[

  ];

  currentShoppingCart : Product[];

  categories : string[
    
  ];

  constructor() { }

  

}
