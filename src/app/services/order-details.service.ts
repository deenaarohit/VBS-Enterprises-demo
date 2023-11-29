import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // productDetails 
  
  productDetails = [
    {
      id:1,
      productName:"Cisterns",
      productDetails:"",
      productPrice:200,
      productImg:'../../../assets/img/Cisterns.jpg'
    },
    {
      id:2,
      productName:"Accessories",
      productDetails:"",
      productPrice:369,
      productImg:"../../../assets/img/Accessories.jpg"
    },
    {
      id:3,
      productName:"Faucets",
      productDetails:"",
      productPrice:149,
      productImg:"../../../assets/img/Faucets.jpg"
    },
    {
      id:4,
      productName:"sanitary-new",
      productDetails:"",
      productPrice:140,
      productImg:"../../../assets/img/sanitary-new.jpg"
    },
    {
      id:5,
      productName:"ShowerHead",
      productDetails:"",
      productPrice:105,
      productImg:"../../../assets/img/Shower-head-new.jpg"
    },
    {
      id:6,
      productName:"Water Heater",
      productDetails:"",
      productPrice:219,
      productImg:"../../../assets/img/Water_heater.jpg"
    }
  ]


  

}