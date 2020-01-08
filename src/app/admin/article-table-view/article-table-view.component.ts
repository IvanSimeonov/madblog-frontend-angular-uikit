import { Component, OnInit } from '@angular/core';
import { ArticlePageDTO, ArticleService } from '@ivannicksim/blog-api';

@Component({
  selector: 'app-article-table-view',
  templateUrl: './article-table-view.component.html',
  styleUrls: ['./article-table-view.component.css']
})
export class ArticleTableViewComponent implements OnInit {

  articlePageDto: ArticlePageDTO;

  constructor(private articleControllerService: ArticleService) { }

  ngOnInit() {

    this.articleControllerService.getArticlesByPage(0,1000).subscribe(page => this.articlePageDto = page);

  }

  deleteById(article){
    this.articleControllerService.deleteArticleById(article.id).subscribe(() => {console.log("Seee");
    window.location.reload();
    });
  }

  editById(article){
    console.log(article.id);
  }

}
