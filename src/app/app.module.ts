import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
Auth.configure({
  Auth:{
    mandatorySignIn:true,
    region: 'ap-south-1',
    userPoolId: 'ap-south-1_uaztLLc50',
    userPoolWebClientId: '49irin85ongeir685539depft9',
    authenticationFlowType:'USER_PASSWORD_AUTH'
  }
});
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
