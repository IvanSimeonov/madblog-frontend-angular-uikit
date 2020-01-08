import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleTableViewComponent } from './article-table-view/article-table-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';



@NgModule({
  declarations: [ArticleCreateComponent, ArticleTableViewComponent, AdminViewComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
