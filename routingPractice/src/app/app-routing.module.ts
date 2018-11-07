import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailIdComponent } from './detail-id/detail-id.component';

const routes: Routes = [{
  path:'main',component:MainComponent
},{
  path:'main/:id',component:DetailIdComponent
},{
  path:'', redirectTo:'main',pathMatch:'full'
},{
  path:'**', component:DetailIdComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
