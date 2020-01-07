import { Component, OnInit } from '@angular/core';
import { ArticleControllerService, ArticlePageDTO } from '@ivan-gen/blog-api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  pageNumber: number;
  

  constructor(private articleService: ArticleControllerService) { }

  ngOnInit() {
    this.articleService.getArticlesByPageUsingGET().subscribe((articlePage: ArticlePageDTO) => {
      console.log(articlePage);
      this.pageNumber = articlePage.pageNumber;
    });
  }

}
