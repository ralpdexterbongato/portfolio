import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.computeMyAge();
  }

  myAge=0;
  birthYear =1998;
  currentYear = 0;
  computeMyAge()
  {
    this.currentYear = (new Date()).getFullYear();
    this.myAge = this.currentYear - this.birthYear;
  }

}
