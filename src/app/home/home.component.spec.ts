import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Observable, of } from 'rxjs';
import { ArticleControllerService, ArticlePageDTO, ArticleDTO } from '@maddob/madblog-api';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let article: ArticleDTO = {
    title: 'HEllo',
    id: 1,
    subtitle: 'WORLD',
    published: true,
    featured: true
  };

  let articlesByPage: ArticlePageDTO = {
    articles: [article],
    totalPages: 1,
    totalArticles: 1
  };

  function articleServiceFactory() {
    return {
      getArticlesByPageUsingGET() {
        return of(articlesByPage);
      }
    };
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {provide: ArticleControllerService, useFactory: articleServiceFactory}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show hello world', () => {
    articlesByPage.totalPages = 10;
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.articlePageDTO.totalPages).toBe(1);
  });
});
