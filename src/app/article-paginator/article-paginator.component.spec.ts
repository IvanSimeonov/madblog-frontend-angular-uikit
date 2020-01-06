import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePaginatorComponent } from './article-paginator.component';

describe('ArticlePaginatorComponent', () => {
  let component: ArticlePaginatorComponent;
  let fixture: ComponentFixture<ArticlePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
