import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';

@Injectable()
export class BookingService {

  url1="http://localhost:3000/bookingService";
  url2="http://localhost:3000/confirmBooking";
  url3="http://localhost:3000/sendEmailToServiceCenter";
  url4="http://localhost:3000/sendEmailToCustomer";

  constructor(private http:Http) { }

  confirmBooking(Cnum,SCnum,date,time,pickup,names,total)
  {
    var token=sessionStorage.getItem("token");
    var body={
      "Cnum":Cnum,
      "SCnum":SCnum,
      "date":date,
      "time":time,
      "pickup":pickup,
      "names":names,
      "total":total,
      "token":token
    }
    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(this.url2,body,requestOptions);
  }

  getBookingDetails(Cnum)
  {
    var token=sessionStorage.getItem("token");
    var body={
      "token":token
    }
    var url="http://localhost:3000/getBookingDetails/"+Cnum;
    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(url,body,requestOptions);
  }

  sendEmailToServiceCenter(SCemail,Cname,Caddr,Ccity,Cpincode,Cmobno,Cemail,date,time,pickup,names,total)
  {
    var token=sessionStorage.getItem("token");
    var body={
      "SCemail":SCemail,
      "Cname":Cname,
      "Caddr":Caddr,
      "Ccity":Ccity,
      "Cpincode":Cpincode,
      "Cmobno":Cmobno,
      "Cemail":Cemail,
      "date":date,
      "time":time,
      "pickup":pickup,
      "names":names,
      "total":total,
      "token":token
    }
    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(this.url3,body,requestOptions);
  }

  sendEmailToCustomer(Cemail,SCname,SCaddr,SCcity,SCpincode,SCemail,SCmobno,date,time,pickup,names,total)
  {
    var token=sessionStorage.getItem("token");
    var body={
      "Cemail":Cemail,
      "SCname":SCname,
      "SCaddr":SCaddr,
      "SCcity":SCcity,
      "SCpincode":SCpincode,
      "SCemail":SCemail,
      "SCmobno":SCmobno,
      "date":date,
      "time":time,
      "pickup":pickup,
      "names":names,
      "total":total,
      "token":token
    }
    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(this.url4,body,requestOptions);
  }

}
