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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      {
        path: 'adminuser', component: AdminusserComponent, children: [
          { path: 'profileuser', component: ProfileuserComponent },
        ]
      },
      {
        path: 'adminmembership', component: AdminmembershipComponent, children: [
          { path: 'profilemembership', component: ProfilemembershipComponent },
        ]
      },
      { path: 'detailuser', component: DetailuserComponent },
      { path: 'detailmembership', component: DetailmembershipComponent },
    ]
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
