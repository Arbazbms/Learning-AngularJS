import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  favoriteColorControl = new FormControl('');
  color: String = "";
}
