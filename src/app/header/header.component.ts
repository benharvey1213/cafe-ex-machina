import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  curTotal : number;

  constructor(private router : Router, private dataInteractionService : DataInteractionService) { }

  ngOnInit(): void {
    this.curTotal = this.dataInteractionService.currentTotal;
  }

  cart(){
    this.router.navigateByUrl('order-list')
  }

}
