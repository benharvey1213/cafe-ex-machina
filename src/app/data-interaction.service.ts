import { Injectable } from "@angular/core";
import { Product } from "./product";
import { MENU } from "./mock-menu";

@Injectable({
  providedIn: "root",
})
export class DataInteractionService {
  menu = MENU;
  
  // https://www.breadandcie.com/the-cafe/cafemenupage/
  // pullin crap off this random website (Ben)
  // we also need a definitive list of categories so we're consistent with the category field

  currentShoppingCart: Product[] = MENU;
  currentTotal: number = 0;
  

  getSubTotal(): number {
    let subTotal = 0;
    for (let i = 0; i < this.currentShoppingCart.length; i++)
    subTotal += this.currentShoppingCart[i].price;
    return subTotal; //TODO: format total as a $ amount will return a string instead of number
  }

  getTax(): number{
    let tax: number= 0.07;
    let subTotal : number = this.getSubTotal();
    return subTotal * tax;
  }

  getTotal(){
    this.currentTotal = this.getSubTotal() + this.getTax();
  }

  getCart(): Product[] {
    this.currentShoppingCart;
    return this.currentShoppingCart;
  }

  removeItem(index: number) {
    let tempArray1: Product[];
    let tempArray2: Product[];
    tempArray1 = this.currentShoppingCart.slice(0, index);
    tempArray2 = this.currentShoppingCart.slice(
      index + 1,
      this.currentShoppingCart.length + 1
    );
    this.currentShoppingCart = tempArray1.concat(tempArray2);
  }
  AddToCart(product : Product): void{ //add currently viewed item to the cart, called in food-desc
    this.currentShoppingCart.push(product)
  }

  constructor() {}
}
