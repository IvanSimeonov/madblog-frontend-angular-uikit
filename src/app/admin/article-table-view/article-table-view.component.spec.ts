import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTableViewComponent } from './article-table-view.component';

describe('ArticleTableViewComponent', () => {
  let component: ArticleTableViewComponent;
  let fixture: ComponentFixture<ArticleTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
