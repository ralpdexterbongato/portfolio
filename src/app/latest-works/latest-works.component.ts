import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-works',
  templateUrl: './latest-works.component.html',
  styleUrls: ['./latest-works.component.css']
})
export class LatestWorksComponent implements OnInit {

  constructor() { }
  page =1;
  maxpage=3;
  ngOnInit() {
  }

  NextComponent()
  {
    if(this.maxpage > this.page)
    {
      this.page = this.page+1;
      window.scrollTo(0, 0);
    }
  }
  PrevComponent()
  {
    if(1 < this.page)
    {
      this.page = this.page-1;
      window.scrollTo(0, 0);
    }
  }

}
