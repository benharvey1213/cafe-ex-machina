import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  phase : number = 0;

  timeLeft : number = 5;
  interval;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0){
        this.timeLeft--;
      } else {
        if (this.phase < 3){
          this.phase++;
        } else {
          this.interval = clearInterval()
        }
        this.timeLeft = 5;
      }
    }, 1000);
  }

}
