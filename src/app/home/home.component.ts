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

  categorySelector(){
    this.router.navigateByUrl('category')
  }

  ngOnInit(): void {
    this.total = this.dataService.getSubTotal();
  }

}
