import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input() total : number;

  constructor(private router : Router) { }

  ngOnInit(): void {

  }

  cart(){
    this.router.navigateByUrl('order-list')
  }

}
