import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule, BASE_PATH } from '@ivannicksim/blog-api';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ArticleViewComponent } from './article-view/article-view.component';
import { TestComponent } from './test/test.component';
import { ArticlePaginatorComponent } from './article-paginator/article-paginator.component';
import { AdminModule } from './admin/admin.module';

class ContentTypeInterceptor implements HttpInterceptor {
  
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    const contentType = req.headers.get('Content-Type');

    if (contentType == '*/*' || req.method == 'PUT') {
      const newHeaders = new HttpHeaders({
        "Content-Type": "application/json"
      });
      
      return next.handle(req.clone({headers: newHeaders}));
    }



    

    return next.handle(req);
  }
}



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
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    AdminModule,
  
    
    
  ],
  exports: [HttpClientModule],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH },
  {provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }


