import { Component, OnInit } from '@angular/core';
import {MENU} from '../mock-menu';
import {Product} from '../product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products : Product[];
  constructor() { }

  ngOnInit(): void {
    this.products=MENU
  }


  //------------------------------
  //This Section is From Noah Case
  //------------------------------
  
  //Ok, so basically what I need from you is something like this IN YOUR HTML!!:

  ///<app-food-desc [product] = "selectedProduct"></app-food-desc>

  //It's going to look a bit different, as it seems like you will need use the abilities of the router to link to my component, as opposed to just straight up pasting my component into your component.
  //You want to link to mine


  //Summarry: So, Essentially what I need you to do for me is:
    // 1. Open the food-desc component when a product item card is clicked on / selected
    // 2. Property bind [product] (my object) to your product object when one is selected in the link to my component. 
    //You may do this through defining a selectedProduct object or you may not. IDK. It may look like the line of code above, or it may not. Idk. 



}
