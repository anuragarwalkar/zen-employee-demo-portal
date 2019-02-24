import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { ZenHomeComponent } from './components/zen-home/zen-home.component';
import { SubmitedFormsComponent } from './components/submited-forms/submited-forms.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditUserComponent } from './components/edit-user/edit-user.component'
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'navbar', component:NavBarComponent, canActivate:[AuthGuard]},
  {path:'signup', component:SignUpComponent},
  {path:'empform', component: EmpFormComponent, canActivate:[AuthGuard]},
  {path:'zenhome', component:ZenHomeComponent, canActivate:[AuthGuard]},
  {path:'submitedforms', component:SubmitedFormsComponent, canActivate:[AuthGuard]},
  {path:'edituser/:id', component: EditUserComponent, canActivate:[AuthGuard]},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
