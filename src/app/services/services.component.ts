import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  SCnum=sessionStorage.getItem("SCnum");
  SCemail=sessionStorage.getItem("SCemail");
  SCname=sessionStorage.getItem("SCname");
  SCaddr=sessionStorage.getItem("SCaddr");
  SCcity=sessionStorage.getItem("SCcity");
  SCpincode=sessionStorage.getItem("SCpincode");
  SCmobno=sessionStorage.getItem("SCmobno");
  
  Cnum=localStorage.getItem("Cnum");
  Cname=localStorage.getItem("Cname");
  Caddr=localStorage.getItem("Caddr");
  Ccity=localStorage.getItem("Ccity");
  Cpincode=localStorage.getItem("Cpincode");
  Cmobno=localStorage.getItem("Cmobno");
  Cemail=localStorage.getItem("Cemail");

  names="";
  Snum=[];
  services=null;
  result=null;
  date="";
  time="";
  pickup="";

  today:Date=new Date();
  now:String='';
  nowDD:String='';
  nowMM:String='';

  total=null;

  constructor(private c:ServicesService,private b:BookingService,private router:Router) {
    var dd=this.today.getDate();
    var mm=this.today.getMonth()+1;
    var yy=String(this.today.getFullYear());

    dd<10 ? (this.nowDD='0'+dd):(this.nowDD=String(dd));
    mm<10 ? (this.nowMM='0'+mm):(this.nowMM=String(mm));
    this.now=yy+'-'+this.nowMM+'-'+this.nowDD;

    c.getSSpecificServices(this.SCnum).subscribe(
      (response)=>
      {
        this.services=response.json();
        if(response.status==401)
        {
          alert("You are unauthorised")
        }
      }
    )
   }

  book(form) {
    let user = form.value;
    this.date=user.date;
    this.time=user.time;
    this.pickup=user.pickup;
    for (var i = 0; i < this.Snum.length; i++) {
      if(this.Snum[i]==true)
      {
        var num=this.services[i].Snum;
        this.total=this.total+this.services[i].Sprice;
        this.names+=(this.services[i].Sname)+", ";
      }
    }
    sessionStorage.setItem("names",this.names);
    sessionStorage.setItem("total",this.total);

    this.b.confirmBooking(this.Cnum,this.SCnum,this.date,this.time,this.pickup,this.names,this.total).subscribe(
      (response)=> 
      {
        this.result=response.json();
        if(response.status==401)
        {
          alert("You are unauthorised")
        }
        if(this.result.result=="error")
        {
          alert("Something went wrong!!!");
        }
        else
        {
            this.b.sendEmailToServiceCenter(this.SCemail,this.Cname,this.Caddr,this.Ccity,this.Cpincode,this.Cmobno,this.Cemail,this.date,this.time,this.pickup,this.names,this.total)
            .subscribe(
            (response)=> 
            {
              this.result=response.json();
              if(response.status==401)
              {
                alert("You are unauthorised")
              }
            }
            )

            this.b.sendEmailToCustomer(this.Cemail,this.SCname,this.SCaddr,this.SCcity,this.SCpincode,this.SCemail,this.SCmobno,this.date,this.time,this.pickup,this.names,this.total)
            .subscribe(
            (response)=> 
            {
              this.result=response.json();
              if(response.status==401)
              {
                alert("You are unauthorised")
              }
            }
            )

          this.router.navigate(["app-details"]);
        }

      }
      )
  }

  ngOnInit() {
  }

}
