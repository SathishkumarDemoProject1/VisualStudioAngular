import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../homeservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  enableAdd=false
  todoDisable=true
  todos=[];
  constructor(private service:HomeserviceService) { }

  ngOnInit() {
    console.log("hello hello")
    this.service.getData().subscribe(datas=>{
     datas.forEach(element => {
      console.log(element)
      this.todos.push({"key":"todo","value":element.name})
     }); 
    },err=>console.log(err))
  }
  toDoSave(value:string,index:number){
    console.log(value)
    this.todos[index].value=value;
  }
  toDoAdd(value){
    console.log(value)
    this.service.insert(value).subscribe(data=>console.log("hai"),err=>console.log(err))
    this.todos.push({"key":"todo","value":value})
  }
  deleteToDo(value:number){
    console.log(value)
    this.todos.splice(value,value==0?1:value)
  }
}
