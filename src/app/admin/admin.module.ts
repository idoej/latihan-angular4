import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { ArticleListComponent } from './comps/article-list/article-list.component';
import { ArticleViewComponent } from './comps/article-view/article-view.component';
import { AdminComponent } from './comps/admin/admin.component';
import { ArticleAddComponent } from './comps/article-add/article-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, ArticleListComponent, ArticleViewComponent, AdminComponent, ArticleAddComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
