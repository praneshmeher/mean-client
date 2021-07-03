import { Router,RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){
  }

  title = 'app';
  selectedComponent="";

  mySelectedComponent(selected)
  {
     sessionStorage.setItem("selectedComponent",selected);
     this.selectedComponent=selected;
  }
  
  isUserLoggedIn()
  {
    return localStorage.getItem("login_status")!=undefined;
  }

  isUserLoggedOut()
  {
    return localStorage.getItem("login_status")!="yes";
  }

  logout()
  {
      localStorage.removeItem("login_status");
      localStorage.removeItem("Cnum");
      localStorage.removeItem("Cname");
      localStorage.removeItem("Caddr");
      localStorage.removeItem("Ccity");
      localStorage.removeItem("Cpincode");
      localStorage.removeItem("Cmobno");
      localStorage.removeItem("Cemail");
      sessionStorage.removeItem("token");
  }

}
