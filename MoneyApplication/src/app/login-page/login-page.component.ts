import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginError=false;
  errorMessage="UserName or Password incorrect"
  constructor(private loginService:LoginserviceService , private route:Router,private activeRoute:ActivatedRoute ) { }

  checkLoginCredential(formValue){
      this.loginService.checkUserCrediential(formValue).subscribe(
       data=>{
         if(data["data"]=="success"){
          console.log(data["data"]+"hai")
          this.loginError=false;
          this.route.navigate(["home"]);
         }
         else{
          this.loginError=true;
         }
        },
       error=>console.log(error))
  }
  forgetPassword(){
    this.route.navigate(["forgetPassword"])
  }
  newRegisteration(){
    this.route.navigate(["register"])
  }
  ngOnInit() {
    
  }

}
