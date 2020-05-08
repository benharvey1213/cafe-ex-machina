import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataInteractionService } from '../data-interaction.service';
import { MENU } from '../mock-menu'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total : number;

  constructor(private dataService : DataInteractionService, private router: Router) { }

  categorySelector(category: number){
    let categoryActual: string;
    if(category === 1)
      categoryActual = 'breakfast';
    else if(category === 2)
      categoryActual = 'panini';
    else if(category === 3)
      categoryActual = 'cafe drink';
    this.dataService.currentCategory = categoryActual;
    this.router.navigateByUrl(this.dataService.currentCategory)
  }

  ngOnInit(): void {
    this.total = this.dataService.getSubTotal();
  }

}
