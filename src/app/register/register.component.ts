
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private customer:CustomerService,private router:Router) { }

  name="";
  address="";
  city="";
  pincode="";
  mobile="";
  email="";
  password="";

  result=null;

  register(form)
  {
    let user = form.value;
    this.name=user.name;
    this.address=user.address;
    this.city=user.city;
    this.pincode=user.pincode;
    this.mobile=user.mobile;
    this.email=user.email;
    this.password=user.password;
    this.customer.CustomerRegistration(this.name,this.address,this.city,this.pincode,this.mobile,this.email,this.password)
    .subscribe(
      (response) =>
      {
        this.result=response.json();
        if(this.result.result=="error")
            alert("Something went wrong!!!"); 
        else
          this.router.navigate(["app-login"]);
      }
    )
  }

   ngOnInit() {
  }
}
