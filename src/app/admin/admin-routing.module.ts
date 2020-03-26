import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../guards/auth.guard';
import {AdminComponent} from './comps/admin/admin.component';
import {DashboardComponent} from './comps/dashboard/dashboard.component';
import {ArticleListComponent} from './comps/article-list/article-list.component';
import {ArticleViewComponent} from './comps/article-view/article-view.component';
import {ArticleAddComponent} from './comps/article-add/article-add.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'article',
        component: ArticleListComponent
      },
      {
        path: 'article/:id',
        component: ArticleViewComponent
      },
      {
        path: 'article-new',
        component: ArticleAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
