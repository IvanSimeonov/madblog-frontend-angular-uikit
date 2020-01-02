import { Component, OnInit } from '@angular/core';
import { ArticleControllerService, ArticlePageDTO } from '@maddob/madblog-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articlePageDTO: ArticlePageDTO;

  constructor(private articleControllerService: ArticleControllerService) { }

  ngOnInit() {
    this.articleControllerService.getArticlesByPageUsingGET().subscribe(page => this.articlePageDTO = page);
  }

}
