import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers} from '@angular/http';

@Injectable()
export class ServiceCenterService {

  constructor(private http:Http) { }

  getServiceCenterByCity(city){
    var token=sessionStorage.getItem("token");
    var body={
      "token":token
    }

    var url="http://localhost:3000/getServiceCenterByCity/"+city;
    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(url,body,requestOptions);
  }

  getServiceCenterNearBy(pincode){
    var token=sessionStorage.getItem("token");
    var body={
      "token":token
    }

    var url="http://localhost:3000/getNearByServiceCenter/"+pincode;
    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(url,body,requestOptions);
  }

  serviceCenterRegistration( name,address,city,pincode,mobile,email)
  {
    var body={
      "SCname":name,
      "SCaddr":address,
      "SCcity":city,
      "SCpincode":pincode,
      "SCmobno":mobile,
      "SCemail":email
    }

    var url="http://localhost:3000/serviceCenterRegister";
    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(url,body,requestOptions);
  }

  getSCnum(email){
    var url="http://localhost:3000/getSCnum/"+email;
    return this.http.get(url);
  }

}
