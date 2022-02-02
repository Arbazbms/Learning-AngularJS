import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { BasicComponent } from './basic/basic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from './demo/demo.component';
import {Demo2Component} from './demo2/demo2.component';
import { ReactiveFormBasicsComponent } from './reactive-form-basics/reactive-form-basics.component';
const routes: Routes = [
  {path:'demo1', component:DemoComponent},
  {path:'demo2', component:Demo2Component},
  {path:'basic', component: BasicComponent},
  {path:'form', component:FormdemoComponent},
  {path:'reactive', component: ReactiveFormBasicsComponent},
  {path : 'formvalidation', component:FormvalidationComponent},
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
