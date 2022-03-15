import { FormBuilder,Validators } from '@angular/forms';
import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private apiService : ApiserviceService, private fb:FormBuilder) { }

  postForm = this.fb.group({
    author: ['', Validators.required],
    title:['', Validators.required]
  })

  SavePost(){
    console.log(this.postForm.value)
    this.apiService.savePost(this.postForm.value).subscribe((result)=>{
      console.warn(result)
    })
  }


  posts:any
  getData(){
    let res:any = this.apiService.getPost().subscribe((data)=>{
    console.log("RESPONSE FROM API_SERVICE: " + JSON.stringify(data))
      this.posts = data
    })
  }
    

  ngOnInit(): void {

  }
  

}
