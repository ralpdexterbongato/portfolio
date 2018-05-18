import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loading = false;
  constructor(private router: Router) {
    this.router.events.subscribe(
      evt=>{
        if(!(evt instanceof NavigationEnd))
        {
          return;
        }
        window.scrollTo(0, 0);
      }
    )
  }

  title = 'app';
  drawerIsActive = false;
  ClickCount = 0;

  toggleDrawer()
  {
    if(this.drawerIsActive==false)
    {
      this.drawerIsActive = true;
    }else
    {
      this.drawerIsActive = false;
    }
  }
  adminlogin()
  {
    this.ClickCount = this.ClickCount + 1;
    if(this.ClickCount > 30)
    {
      this.router.navigate(['admin-only']);
    }
  }

}
