import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './component/usercomponents/signin/signin.component';
import { HomeComponent } from './component/usercomponents/home/home.component';
import { SignupComponent } from './component/usercomponents/signup/signup.component';
import { AdminComponent } from './component/admincomponents/admin/admin.component';
import { AdminusserComponent } from './component/admincomponents/adminuser/adminusser.component';
import { AdminmembershipComponent } from './component/admincomponents/adminmembership/adminmembership.component';
import { DetailuserComponent } from './component/admincomponents/detailuser/detailuser.component';
import { DetailmembershipComponent } from './component/admincomponents/detailmembership/detailmembership.component';
import { ProfileuserComponent } from './component/admincomponents/profileuser/profileuser.component';
import { ProfilemembershipComponent } from './component/admincomponents/profilemembership/profilemembership.component';
import { VerifyComponent } from './component/usercomponents/verify/verify.component';

import { AuthGuardLogin } from './service/auth-guard-login';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'verify', component: VerifyComponent },

  {
    path: 'admin', component: AdminComponent , children: [
      {
        path: 'adminuser', component: AdminusserComponent, children: [
          { path: 'profileuser/:username', component: ProfileuserComponent },
        ]
      },
      {
        path: 'adminmembership', component: AdminmembershipComponent, children: [
          { path: 'profilemembership/:username', component: ProfilemembershipComponent },
        ]
      },
      { path: 'detailuser/:username', component: DetailuserComponent },
      { path: 'detailmembership/:username', component: DetailmembershipComponent },
    ], canActivate: [AuthGuardLogin],
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
