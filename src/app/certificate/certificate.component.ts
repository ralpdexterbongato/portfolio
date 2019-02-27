import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.linedataChanger();
  }

  currentView = 1;
  modalIsActive = false;
  firstline = '';
  secondline = '';
  thirdline = '';
  forthline = '';
  fifthline = '';

  nextClick()
  {
    if(this.currentView != 6)
    {
      this.currentView = this.currentView + 1;
      this.linedataChanger();
    }else
    {
      this.currentView = 1;
      this.linedataChanger();
    }
  }
  prevClick()
  {
    if(this.currentView != 1)
    {
      this.currentView = this.currentView - 1;
      this.linedataChanger();
    }else
    {
      this.currentView = 6;
      this.linedataChanger();
    }
  }

  modalToggle()
  {
    this.modalIsActive = !this.modalIsActive;
  }

  linedataChanger()
  {
    if(this.currentView ==1)
    {

      this.firstline = 'Title: WordPress Level 2 | Builder Course Part C of C';
      this.secondline = 'Presenter: Sean Bridge';
      this.thirdline = 'Certificate: Attendance';
      this.forthline = 'Date: January 2019';
      this.fifthline = '';
    }else if(this.currentView == 2)
    {
      this.firstline = 'Title: WordPress Level 2 | Builder Course Part A of C';
      this.secondline = 'Presenter: Sean Bridge';
      this.thirdline = 'Certificate: Attendance';
      this.forthline = 'Date: January 2019';
      this.fifthline = '';
    }else if(this.currentView == 3)
    {
      this.firstline = 'Title: Learning WordPress for a Site, Store or Blog | Level 1';
      this.secondline = 'Presenter: Sean Bridge';
      this.thirdline = 'Certificate: Attendance';
      this.forthline = 'Date: December 2018';
      this.fifthline = '';
    }else if(this.currentView == 4)
    {
      this.firstline = 'Award: Best In Programming, among the CCICT graduating students for AY 2017-2018';
      this.secondline = 'Certificate: Recognition';
      this.thirdline = '';
      this.forthline = 'Date: March 2018';
      this.fifthline = '';
    }else if(this.currentView == 5)
    {
      this.firstline = 'Title: Database-Driven Software Applications Development';
      this.secondline = 'Presenter: Benjie Lenteria';
      this.thirdline = 'Certificate: Attendance';
      this.forthline = 'Date: March 2017';
      this.fifthline = '';
    }else if(this.currentView == 6)
    {
      this.firstline = 'Title: 9th Bohol IT Student Congress';
      this.secondline = 'Presenter: PSITE7';
      this.thirdline = 'Certificate: Participation';
      this.forthline = 'Date: February 2017';
      this.fifthline = 'Held: University of Bohol';
    }
  }

}
