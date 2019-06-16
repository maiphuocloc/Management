import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/usercomponents/signin/signin.component';
import { HomeComponent } from './component/usercomponents/home/home.component';
import { SignupComponent } from './component/usercomponents/signup/signup.component';
import { DetailuserComponent } from './component/admincomponents/detailuser/detailuser.component';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import { HeaderComponent } from './component/usercomponents/header/header.component';
import { FooterComponent } from './component/usercomponents/footer/footer.component';
import { AdminComponent } from './component/admincomponents/admin/admin.component';
import { AdminusserComponent } from './component/admincomponents/adminuser/adminusser.component';
import { AdminmembershipComponent } from './component/admincomponents/adminmembership/adminmembership.component';
import { DetailmembershipComponent } from './component/admincomponents/detailmembership/detailmembership.component';
import { ProfileuserComponent } from './component/admincomponents/profileuser/profileuser.component';
import { ProfilemembershipComponent } from './component/admincomponents/profilemembership/profilemembership.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    DetailuserComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AdminusserComponent,
    AdminmembershipComponent,
    DetailmembershipComponent,
    ProfileuserComponent,
    ProfilemembershipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
