import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
public employeeList=[{"id":1,"name":"aaaa"},
{"id":2,"name":"bbbb"},
{"id":3,"name":"cccc"},
{"id":4,"name":"dddd"}];
  constructor(public route:Router,private relateroute:ActivatedRoute) { }

  ngOnInit() {
  }
employeeSelect(employee){
  this.route.navigate(["/main",employee.id])
  this.route.navigate(["/main",{'id':employee.id}])//return back
  this.route.navigate([employee.id],{relativeTo: this.relateroute})
  this.route.navigate(['../',{'id':employee.id},{relativeTo: this.route}])
}
}
