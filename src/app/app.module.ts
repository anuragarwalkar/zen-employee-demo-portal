import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { ZenHomeComponent } from './zen-home/zen-home.component';
import { SubmitedFormsComponent } from './emp-form/submited-forms/submited-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
    ZenHomeComponent,
    SubmitedFormsComponent,
    NavBarComponent,
    EditUserComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, 
                  AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
