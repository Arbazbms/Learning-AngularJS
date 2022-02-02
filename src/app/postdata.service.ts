import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  constructor() { }

  postData(param1 : String){
    console.log("param1 : FROM service postdata  received " +param1 + " data");
  }
}
