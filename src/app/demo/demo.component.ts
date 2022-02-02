import { Myservice2Service } from './../myservice2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private Myservice2Service: Myservice2Service) { }
  message : String = "";
  ngOnInit(): void {
    this.message = this.Myservice2Service.myMsg2();
  }

}
