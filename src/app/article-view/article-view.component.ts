import { Component, OnInit } from '@angular/core';
import { ArticleControllerService, ArticleDTO } from '@maddob/madblog-api';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  id: number;
  article: ArticleDTO;

  constructor(private articleService: ArticleControllerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((parameterMap: ParamMap) => {
      console.log("Parameter is: " + parameterMap.get("id"));
      this.id = +(parameterMap.get("id"));
      console.log("Id is " + this.id);
    })
    
      this.articleService.getArticleByIdUsingGET(this.id).subscribe((currArticle: ArticleDTO) =>{
      this.article = currArticle;
      
    });
    
  }

}
