import { PostdataService } from './../postdata.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form-basics',
  templateUrl: './reactive-form-basics.component.html',
  styleUrls: ['./reactive-form-basics.component.css']
})
export class ReactiveFormBasicsComponent implements OnInit {

  //! Using Formgroup
  loginForm = new FormGroup({
    email : new FormControl(""),
    password : new FormControl("")
  })
  postData(){
    console.log(this.loginForm.value)
  }

  
  //! using FormBuiler
  constructor(private fb: FormBuilder, private postservice: PostdataService) { }
  data : any 
  loginForm2 = this.fb.group({
    fname:[''],
    lname : ['']
  })

  post2Data(){
    console.log(this.loginForm2.value)
  }

  //! Creating nested form groups
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  postNestedData(){
    console.warn(this.profileForm.value)
    this.data = this.postservice.postData(this.profileForm.value.firstName)

  }
  ngOnInit(): void {
    //to track realtime changes in Form on console.log
    this.loginForm2.valueChanges.subscribe(selectedValue => {
      console.log('form value changed')
      console.log(selectedValue)
    })
    
  }







}
