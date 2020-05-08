import { Component, OnInit } from '@angular/core';
import { DataInteractionService } from '../data-interaction.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total : number;

  constructor(private data : DataInteractionService) { }

  ngOnInit(): void {
    this.total = this.data.getSubTotal();
  }

}
