import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  url = 'http://localhost:3000/posts'
  constructor(private http:HttpClient) { }

  getPost = () => {

    return this.http.get(this.url)
    // console.log("POST OBJECT" + JSON.stringify(post))
    // return post.title;
  }

  savePost = (data:any)=>{
    return this.http.post(this.url, data)
  }

}
