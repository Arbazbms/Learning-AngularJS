import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Myservice2Service {

  constructor() { }

  myMsg2(){
    return "Returning from myService2 class!!"
  }
}
