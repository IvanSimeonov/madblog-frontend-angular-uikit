import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule, BASE_PATH } from '@maddob/madblog-api';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { ArticleViewComponent } from './article-view/article-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
