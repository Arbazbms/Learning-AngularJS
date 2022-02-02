import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

  constructor() { }
  formValid = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone : new FormControl(null, [Validators.required]),
    message: new FormControl(null, Validators.minLength(10))

  })

  submitData(){
    console.log(this.formValid.value)
    this.formValid.reset();
  }
  ngOnInit(): void {
  }

}
