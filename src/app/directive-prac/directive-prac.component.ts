import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-prac',
  templateUrl: './directive-prac.component.html',
  styleUrls: ['./directive-prac.component.css']
})
export class DirectivePracComponent {
  isDisplayable = false;
  timeStamp = Date().split(' ', 5).join(' ');
  log = [];


  constructor() { }

  onDisplay() {
    this.isDisplayable = !this.isDisplayable
    this.log.push(this.timeStamp)
  }
  resetTimestamps() {
    this.log = []
  }

  getColor(index) {
    return index > 4 ? 'blue' : 'white'
  }
}
