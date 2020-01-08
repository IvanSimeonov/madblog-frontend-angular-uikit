import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleCreateComponent } from "./article-create/article-create.component";
import { ArticleTableViewComponent } from "./article-table-view/article-table-view.component";

const routes: Routes = [
  {
    path: "article/create",
    component: ArticleCreateComponent
  },
  {
    path: "article/table",
    component: ArticleTableViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
