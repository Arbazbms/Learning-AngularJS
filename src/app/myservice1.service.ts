import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Myservice1Service {

  constructor() { }

  getMsg(){
    return "Returning from MyService1 class!!"
  }
}
