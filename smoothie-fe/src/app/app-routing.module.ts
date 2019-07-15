import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { DetailComponent } from './detail/detail.component';
import { UsersComponent } from './users/users.component';
import { SmoothiesFormComponent } from './smoothies-form/smoothies-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersFormComponent } from './users-form/users-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'smoothie',
    component: SmoothiesComponent,
  },
  {
    path: 'details/:id',
    component: DetailComponent,
  },
  {
    path: 'utilisateurs',
    component: UsersComponent,
  },
  {
    path: 'userDetails/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'ajouterSmoothie',
    component: SmoothiesFormComponent,
  },
  {
    path: 'ajouterUtilisateurs',
    component: UsersFormComponent,
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
