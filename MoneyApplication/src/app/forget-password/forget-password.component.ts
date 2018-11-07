import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  Otp=""
  resetConfirmPassword=""
  resetPassword=""
  incorrectOtp=false;
  displayForm=true;
  displayResetPasssword=false;
  displayOTPInput=false;
  forgetForm=this.forgetform.group({
    emailId:["",[Validators.email,Validators.required]]
  });
  constructor(private forgetform:FormBuilder) { }
  requestOTP(){
    this.displayForm=false
    console.log(this.forgetForm.get('emailId').value)
    this.displayOTPInput=true;
  }
  resendOTP(){
    console.log("resendOtp")
  }
  verifyOTP(otp){
    console.log("otp:",otp)
    if(otp==1)
    this.incorrectOtp=true;
    else{
      this.displayOTPInput=false
    this.displayResetPasssword=true
    }
  }
  resetExistingPassword(password){
  console.log("passwordReset",password)
  }
  ngOnInit() {}
}
