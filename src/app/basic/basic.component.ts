import { Myservice2Service } from './../myservice2.service';
import { Component, OnInit } from '@angular/core';
import { Myservice1Service } from '../myservice1.service';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

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
