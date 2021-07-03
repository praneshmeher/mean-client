
import { BookingService } from './booking.service';
import { ServicesService } from './services.service';
import { AuthService } from './auth.service';
import { CustomerService } from './customer.service';
import { ServiceCenterService } from './service-center.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import {HttpModule} from '@angular/http';
import { RouterModule, CanActivate,RouterLinkActive } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CitiesComponent } from './cities/cities.component';
import { ServiceCenterByCityComponent } from './service-center-by-city/service-center-by-city.component';
import { ServiceCenterNearByComponent } from './service-center-near-by/service-center-near-by.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { DetailsComponent } from './details/details.component';
import { ApplyComponent } from './apply/apply.component';
import { AddComponent } from './add/add.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CitiesComponent,
    ServiceCenterByCityComponent,
    ServiceCenterNearByComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    WhyUsComponent,
    DetailsComponent,
    ApplyComponent,
    AddComponent,
    OrdersComponent,
  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  

    RouterModule.forRoot([
      {path:"app-service-center-by-city", component:ServiceCenterByCityComponent, canActivate:[AuthService]},
      {path:"app-service-center-near-by", component:ServiceCenterNearByComponent, canActivate:[AuthService]},
      {path:"app-login", component:LoginComponent},
      {path:"app-about-us", component:AboutUsComponent},
      {path:"app-why-us", component:WhyUsComponent},
      {path:"app-register", component:RegisterComponent},
      {path:"app-cities", component:CitiesComponent,canActivate:[AuthService]},
      {path:"app-services", component:ServicesComponent,canActivate:[AuthService]},
      {path:"app-details", component:DetailsComponent,canActivate:[AuthService]},
      {path:"app-orders", component:OrdersComponent,canActivate:[AuthService]},
      {path:"app-apply", component:ApplyComponent},
      {path:"app-add", component:AddComponent},
      

      {path:"**", component:HomeComponent}
    ])
  ],
  providers: [ServiceCenterService,CustomerService,AuthService,ServicesService,BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
