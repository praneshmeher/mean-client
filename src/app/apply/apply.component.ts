import { ServiceCenterService } from './../service-center.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor(private s:ServiceCenterService,private router:Router) { }

  name="";
  address="";
  city="";
  pincode="";
  mobile="";
  email="";

  result=null;
  result1=null;

  register(form)
  {
    let user = form.value;
    this.name=user.name;
    this.address=user.address;
    this.city=user.city;
    this.pincode=user.pincode;
    this.mobile=user.mobile;
    this.email=user.email;
    sessionStorage.setItem("email",this.email);
    this.s.serviceCenterRegistration(this.name,this.address,this.city,this.pincode,this.mobile,this.email)
    .subscribe(
      (response) =>
      {
        this.result=response.json()
        if(this.result.result=="error")
          alert("Something went wrong!!!");
        else
          this.router.navigate(["app-add"]);
      }
    )   
  }

  ngOnInit() {
  }

}
