import { Router } from '@angular/router';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router,private customer:CustomerService) { }

  email="";
  password="";

  login(form)
  {
    let user = form.value;
    this.email=user.email;
    this.password=user.password;
    this.customer.CustomerLogin(this.email,this.password)
    .subscribe(
      (response)=>
      {
        const result=response.json();
        let token = result.token;
        sessionStorage.setItem("token",token);
          if(response.status==200)
          {
            alert(`WELCOME ${result.user.Cname}`);
            localStorage.setItem("login_status","yes");
            localStorage.setItem("Cnum",result.user.Cnum);
            localStorage.setItem("Cname",result.user.Cname);
            localStorage.setItem("Caddr",result.user.Caddr);
            localStorage.setItem("Ccity",result.user.Ccity);
            localStorage.setItem("Cpincode",result.user.Cpincode);
            localStorage.setItem("Cmobno",result.user.Cmobno);
            localStorage.setItem("Cemail",result.user.Cemail);
             
            if(sessionStorage.getItem("selectedComponent")=='nearby')
            {
              this.router.navigate(["app-service-center-near-by"]);
            }
            else if(sessionStorage.getItem("selectedComponent")=='service_centers')
            {
              this.router.navigate(["app-cities"]);
            }
            else
            {
              this.router.navigate(["app-home"]);
            }
          }
          else 
          {
            alert('Invalid Username or password');
          } 
      }
    )
 
 
  }

  
  register()
  {
    this.router.navigate(["app-register"]);
  }

  ngOnInit() {
  }

}
