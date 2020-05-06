import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-prac',
  templateUrl: './directive-prac.component.html',
  styleUrls: ['./directive-prac.component.css']
})
export class DirectivePracComponent {
  isDisplayable = false;
  clicksArr = [];
  timeStamp = Date().split(' ', 5).join(' ');


  constructor() { }

  onDisplay() {
    this.clicksArr.push(this.timeStamp)
    return this.isDisplayable = true;
  }
}
