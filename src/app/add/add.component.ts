import { ServicesService } from './../services.service';
import { ServiceCenterService } from './../service-center.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Sname="";
  Sprice="";
  SCnum=""
  result=null;
  result1=null;

  constructor(private sc:ServiceCenterService,private s:ServicesService,private router:Router) {
    
  }

  add(form)
  {
    let service = form.value;
    this.Sname=service.Sname;
    this.Sprice=service.Sprice;

    var email=sessionStorage.getItem("email"); 
    this.sc.getSCnum(email)
    .subscribe(
      (response) =>
      {
        this.result=response.json()
        this.SCnum=this.result[0].SCnum;
        this.addService();
        alert("Service added successfully!!!")
        this.Sname="";
        this.Sprice="";
      }
    )
  }

  addService()
  {
    this.s.addService(this.Sname,this.SCnum,this.Sprice).subscribe(
    (response)=> 
    {
      this.result1=response.json()
    }
    )
  }

  ngOnInit() {
  }

}
