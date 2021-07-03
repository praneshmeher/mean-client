import { Component, OnInit } from '@angular/core';
import { BookingService } from "../booking.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  details=null;
  Cnum=localStorage.getItem("Cnum");

  constructor(private b:BookingService) {
  b.getBookingDetails(this.Cnum).subscribe(
    (response)=>
    {
      this.details=response.json();
      if(response.status==401)
      {
        alert("You are unauthorised")
      }
    }
  )
  }

  ngOnInit() {
  }

}
