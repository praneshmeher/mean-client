import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from "@angular/http";

@Injectable()
export class ServicesService {

  constructor(private http:Http) { }

  getSSpecificServices(SCnum)
  {
    var token=sessionStorage.getItem("token");
    var body={
      "token":token
    }
    var url="http://localhost:3000/getSService/"+SCnum;
    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(url,body,requestOptions);
  }

  addService(Sname,SCnum,Sprice)
  {
    console.log(Sname,SCnum,Sprice);
    var body={
      "Sname":Sname,
      "SCnum":SCnum,
      "Sprice":Sprice,
    }

    var url="http://localhost:3000/addService";
    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions=new RequestOptions({headers:header});
    return this.http.post(url,body,requestOptions);
  }
}

