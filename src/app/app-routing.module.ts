import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error404Component} from './comps/error404/error404.component';
import {LoginComponent} from './comps/login/login.component';
import {HomeComponent} from './comps/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
