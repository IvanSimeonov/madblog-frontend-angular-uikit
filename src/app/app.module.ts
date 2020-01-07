import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule, BASE_PATH } from '@ivan-gen/blog-api';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleViewComponent } from './article-view/article-view.component';
import { TestComponent } from './test/test.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticlePaginatorComponent } from './article-paginator/article-paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleViewComponent,
    TestComponent,
    ArticlePaginatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule,
    AppRoutingModule,
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
