import { Component, OnInit } from '@angular/core';
import { ArticleService, ArticlePageDTO } from '@ivannicksim/blog-api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  pageNumber: number;
  

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticlesByPage().subscribe((articlePage: ArticlePageDTO) => {
      console.log(articlePage);
      this.pageNumber = articlePage.pageNumber;
    });
  }

}
