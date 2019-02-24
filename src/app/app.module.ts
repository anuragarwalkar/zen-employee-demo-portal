import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FirestoreSettingsToken} from '@angular/fire/firestore';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { ZenHomeComponent } from './components/zen-home/zen-home.component';
import { SubmitedFormsComponent } from './components/submited-forms/submited-forms.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
    ZenHomeComponent,
    SubmitedFormsComponent,
    NavBarComponent,
    EditUserComponent,
    LoginComponent,
    SignUpComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,'demoCRUD'),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
