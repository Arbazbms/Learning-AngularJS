import { PostdataService } from './postdata.service';
import { Myservice2Service } from './myservice2.service';
import { Myservice1Service } from './myservice1.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BasicComponent } from './basic/basic.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { ReactiveFormBasicsComponent } from './reactive-form-basics/reactive-form-basics.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component'

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    PageNotFoundComponent,
    BasicComponent,
    FormdemoComponent,
    ReactiveFormBasicsComponent,
    FormvalidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Myservice1Service,Myservice2Service, PostdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
