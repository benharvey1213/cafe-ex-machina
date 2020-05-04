import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.component.html',
  styleUrls: ['./order-list-page.component.css']
})
export class OrderListPageComponent implements OnInit {
  headers = ["Name", "Price"];
  rows = [
    {
      "Name": "Red Bean Soup",
      "Price": 10.50
    },
    {
      "Name": "black coffee",
      "Price": 9.5
    },
    {
      "Name": "surgar cookie",
      "Price": 5
    }];
  constructor() { }

  ngOnInit(): void {
  }

}
