import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  curTotal : number;

  constructor(private dataInteractionService : DataInteractionService) { }

  ngOnInit(): void {
    this.curTotal = this.dataInteractionService.currentTotal;
  }

}
