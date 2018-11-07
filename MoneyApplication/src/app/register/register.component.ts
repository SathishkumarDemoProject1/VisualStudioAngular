import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { NgModel, NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('loginForm') registerationForm: HTMLFormElement;

  registerModel={
    password:'',
    confirmPassword:'',
    userName:'',
    email:''
  }

  constructor(public route:Router,public loginservice:LoginserviceService,private registerService : RegisterService) { }

  ngOnInit() {
  }
  passwordChange(confirmPassword){
    console.log(confirmPassword)
    console.log(this.registerModel.confirmPassword,this.registerModel.password)
    if(this.registerModel.confirmPassword!=this.registerModel.password)
      confirmPassword.control.setErrors({'mismatch': true});
    else
      confirmPassword.control.setErrors(null);
  }

  checkUserEmail(emailModel){
    console.log(emailModel)
    //if(!emailModel.control.errors||(!emailModel.control.errors.required)&&(!emailModel.control.errors.email))
    this.registerService.checkUserEmail(this.registerModel.email).subscribe(
      data=>{
        if(data["data"]=="success"){
          console.log("Sucess")
          emailModel.control.setErrors(delete emailModel.control.errors['userExist'])
        }
        else{
          console.log("Fail")
          emailModel.control.setErrors({userExist:true})
        }
      })
  }

  register(value){
    console.log(value)
    // this.route.navigate(["home"]);
    this.registerService.registerNewUser(value).subscribe(
    data=>{
      if(data["data"]=="success"){
      console.log(data["data"]+"hai")
      this.route.navigate(["home"]);
    }
    },
    error=>console.log(error))
  }
}
