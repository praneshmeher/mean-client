import { Component, OnInit } from '@angular/core';
import { ServiceCenterService } from "../service-center.service";
import { ServicesService } from "../services.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-center-near-by',
  templateUrl: './service-center-near-by.component.html',
  styleUrls: ['./service-center-near-by.component.css']
})
export class ServiceCenterNearByComponent implements OnInit {

  centers=null;
  pincode=localStorage.getItem("Cpincode");

  constructor(private router:Router,private sc:ServiceCenterService) { 
    sc.getServiceCenterNearBy(this.pincode).subscribe(
      (response)=>
      {
        this.centers=response.json();
        if(response.status==401)
        {
          alert("You are unauthorised")
        }
      }
    )
  }

  select(center)
  {
    sessionStorage.setItem("SCnum",center.SCnum);
    sessionStorage.setItem("SCname",center.SCname);
    sessionStorage.setItem("SCaddr",center.SCaddr);
    sessionStorage.setItem("SCcity",center.SCcity);
    sessionStorage.setItem("SCpincode",center.SCpincode);
    sessionStorage.setItem("SCmobno",center.SCmobno);
    sessionStorage.setItem("SCemail",center.SCemail);
    this.router.navigate(["app-services"]);
  }

  ngOnInit() {
  }

}
