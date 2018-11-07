import { Component, OnInit } from '@angular/core';
import { SeviceService } from './sevice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularPractice';
private employeeList;

  greetingMessage = 'Hi Sathish kumar kill it';
  start=false;
  list : string[]=['abcde','abcde','abcde'];
  color="green"
  green=true
  showDiv=true
  className="whiteClass"
  whiteClass={
    "whiteClass" : true,
    "greenClass" : false,
    "redClass" : false

  }
  greenClass={
    "whiteClass" : !true,
    "greenClass" : !false,
    "redClass" : false

  }
  redClass={
    "whiteClass" : !true,
    "greenClass" : false,
    "redClass" : !false

  }
constructor(private employeeService:SeviceService){

}
ngOnInit(){
  this.employeeList=this.employeeService.getEmloyee();
  console.log(this.employeeList)
    }

}
