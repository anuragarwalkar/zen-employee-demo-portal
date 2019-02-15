import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { ZenHomeComponent } from './zen-home/zen-home.component';
import { SubmitedFormsComponent } from './emp-form/submited-forms/submited-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EditUserComponent } from './edit-user/edit-user.component'
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'Nav-bar', component:NavBarComponent, canActivate:[AuthGuard]},
  {path:'Sign-up', component:SignUpComponent,  canActivate:[AuthGuard]},
  {path:'Emp-form', component: EmpFormComponent, canActivate:[AuthGuard]},
  {path:'Zen-home', component:ZenHomeComponent, canActivate:[AuthGuard]},
  {path:'Submited-forms', component:SubmitedFormsComponent, canActivate:[AuthGuard]},
  {path:'EditUser/:id', component: EditUserComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
