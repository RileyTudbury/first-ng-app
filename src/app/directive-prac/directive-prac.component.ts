import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-prac',
  templateUrl: './directive-prac.component.html',
  styleUrls: ['./directive-prac.component.css']
})
export class DirectivePracComponent {
  isDisplayable = false;
  timeStamp = Date().split(' ', 5).join(' ');
  clickTimes = [];

  constructor() { }

  onDisplay() {
    this.clickTimes.push(this.timeStamp)
    return this.isDisplayable = true;
  }

  resetTimestamps() {
    this.clickTimes = []
  }
}
