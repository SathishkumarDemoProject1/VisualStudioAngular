import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-detail-id',
  templateUrl: './detail-id.component.html',
  styleUrls: ['./detail-id.component.css']
})
export class DetailIdComponent implements OnInit {
  public id;
  constructor(private router: ActivatedRoute, private nextPageRouter:Router) { }

  ngOnInit() {
  // this.id=this.router.snapshot.paramMap.get("id");

  this.router.paramMap.subscribe((params: ParamMap)=>{
    this.id=params.get("id")
  })
  }

  goToNext(){
      // this.nextPageRouter.navigate(["/main",++this.id])
      this.nextPageRouter.navigate(["../",++this.id],{relativeTo: this.router})
  }
  goBack(){
    //this.nextPageRouter.navigate(["/main",{"id":this.id}])
    this.nextPageRouter.navigate(["../",{"id":this.id}],{relativeTo: this.router})
}

}
