import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { DetailuserComponent } from './component/detailuser/detailuser.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    DetailuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
