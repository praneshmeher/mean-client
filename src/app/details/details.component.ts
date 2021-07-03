import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  SCname=sessionStorage.getItem("SCname");
  SCaddr=sessionStorage.getItem("SCaddr");
  SCcity=sessionStorage.getItem("SCcity");
  SCpincode=sessionStorage.getItem("SCpincode");
  SCmobno=sessionStorage.getItem("SCmobno");
  SCemail=sessionStorage.getItem("SCemail");

  names=sessionStorage.getItem("names");
  total=sessionStorage.getItem("total");

  Cname=localStorage.getItem("Cname");
  Caddr=localStorage.getItem("Caddr");
  Ccity=localStorage.getItem("Ccity");
  Cpincode=localStorage.getItem("Cpincode");
  Cmobno=localStorage.getItem("Cmobno");
  Cemail=localStorage.getItem("Cemail");

  ngOnInit() {
  }

}
