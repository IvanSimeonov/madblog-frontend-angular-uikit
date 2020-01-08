import { Component, OnInit } from '@angular/core';
import { ArticlePageDTO, ArticleService } from '@ivannicksim/blog-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-table-view',
  templateUrl: './article-table-view.component.html',
  styleUrls: ['./article-table-view.component.css']
})
export class ArticleTableViewComponent implements OnInit {

  articlePageDto: ArticlePageDTO;

  constructor(private articleControllerService: ArticleService,
    private router: Router) { }

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

  openAdminPage(){
    this.router.navigate(['/admin'])
  }

  openHomePage(){
    this.router.navigate(['/home'])
  }

}
