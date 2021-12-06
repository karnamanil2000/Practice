import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { UserdashboardComponent } from './layout/userdashboard/userdashboard.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
  { path: 'userdashboard',
    children: [  
      { path:'list', component:ListUsersComponent },
      { path:'delete/:id', component:DeleteUserComponent },
      { path:'edit/:id', component:EditUserComponent},
      { path:'view/:id', component:ViewUserComponent },
      { path:'create', component:AddUserComponent },
      { path:'', component:UserdashboardComponent},
    ],
  },
  { path:'signin', component:LoginComponent},
  { path:'', redirectTo:'signin', pathMatch:'full' },
  { path:'signup', component:SignupComponent},
  //{ path:'', redirectTo:'users/create', pathMatch:'full' },
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
