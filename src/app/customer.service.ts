import { Http,Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  url1="http://localhost:3000/register";
  url2="http://localhost:3000/login";

  constructor(private http:Http) { }

  CustomerRegistration( name,address,city,pincode,mobile,email,password)
  {
    var body={
      "Cname":name,
      "Caddr":address,
      "Ccity":city,
      "Cpincode":pincode,
      "Cmobno":mobile,
      "Cemail":email,
      "Cpassword":password
    }

    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(this.url1,body,requestOptions);
  }

  CustomerLogin(email,password)
  {
    var body={
      "email":email,
      "password":password
    }

    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(this.url2,body,requestOptions);
  }

}
