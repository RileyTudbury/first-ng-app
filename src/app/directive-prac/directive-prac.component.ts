import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-prac',
  templateUrl: './directive-prac.component.html',
  styleUrls: ['./directive-prac.component.css']
})
export class DirectivePracComponent {
  isDisplayable = false;
  clickCounter = 0;
  timeStamp = Date().split(' ', 5).join(' ');
  clickTimes = [];


  constructor() { }

  onDisplay() {
    this.clickCounter++
    this.clickTimes.push({ time: this.timeStamp, clicks: this.clickCounter })
    return this.isDisplayable = true;
  }

  resetTimestamps() {
    this.clickTimes = []
  }

  getColor(numClicks) {
    return numClicks > 4 ? 'blue' : 'white'
  }
}
