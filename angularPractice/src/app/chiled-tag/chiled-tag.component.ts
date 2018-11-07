import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { SeviceService } from '../sevice.service'
@Component({
  selector: 'app-chiled-tag',
  templateUrl: './chiled-tag.component.html',
  styleUrls: ['./chiled-tag.component.css']
})
export class ChiledTagComponent implements OnInit {

  public employeeList=[]
  @Input("ParentParam") parentValue : boolean;
  @Output() eventOut= new EventEmitter();
  constructor( private Employeeservice : SeviceService) { }
  hideDiv(){
    this.eventOut.emit(false);

  }
  ngOnInit() {
  this.Employeeservice.getEmloyee().subscribe(data=>this.employeeList=data,error=>console.log(error));
  console.log(this.employeeList)
  }

}
