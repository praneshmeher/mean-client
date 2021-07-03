import { Component, OnInit } from '@angular/core';
import { ServiceCenterService } from "../service-center.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-center-by-city',
  templateUrl: './service-center-by-city.component.html',
  styleUrls: ['./service-center-by-city.component.css']
})
export class ServiceCenterByCityComponent implements OnInit {

  centers=null;
  city=sessionStorage.getItem("city");

  constructor(private router:Router,private scs:ServiceCenterService) { 
    scs.getServiceCenterByCity(this.city).subscribe(
      (response)=>
      {
        this.centers=response.json()
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
