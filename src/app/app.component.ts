import { Myservice2Service } from './myservice2.service';
import { Myservice1Service } from './myservice1.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  myObject = {
    color : "red",
    material : "soft"
  }

  myArr = [1,2,3,4,5]
  weekdays = ['Sunday', 'Monday', 'Tuesday',
  'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  image = '../assets/img.jpg'

  show(){
    alert("show() triggerd through Event Binding");
  }

  fullName: string = "Arbaz Ahmed";    


  message: String = "";
  serviceMessage2: String = "";
  constructor(private Myservice1Service : Myservice1Service, private Myservice2Service : Myservice2Service) {}

  ngOnInit(): void{
    this.message = this.Myservice1Service.getMsg()
    this.serviceMessage2 = this.Myservice2Service.myMsg2();
  }
}
