import { Component, OnInit } from '@angular/core';
import { ArticleControllerService, ArticlePageDTO } from '@maddob/madblog-api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articlePageDTO: ArticlePageDTO;
  content: string;
  created: Date;
  featured: boolean;
  id: number;
  published: boolean;
  subtitle: string;
  title: string;
  counter: number;

  constructor(private articleControllerService: ArticleControllerService,
              private router: Router) { }

  ngOnInit() {
    
    
    this.articleControllerService.getArticlesByPageUsingGET().subscribe(page => this.articlePageDTO = page);
    
  }

  onSelect(article){
    this.router.navigate(['/articles',article.id])
  }

  first(pageNr:number){
    this.articleControllerService.getArticlesByPageUsingGET(pageNr).subscribe(page => this.articlePageDTO = page);

  }

}
