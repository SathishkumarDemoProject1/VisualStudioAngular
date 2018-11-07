import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent, } from './home-page/home-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [ 
  {path:"",redirectTo:'login',pathMatch:"full"},
  {path:"home",component:HomePageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"forgetPassword",component:ForgetPasswordComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
