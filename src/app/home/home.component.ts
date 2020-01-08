import { Component, OnInit } from '@angular/core';
import { ArticleService, ArticlePageDTO } from '@ivannicksim/blog-api';
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

  constructor(private articleControllerService: ArticleService,
              private router: Router) { }

  ngOnInit() {
    
    
    this.articleControllerService.getArticlesByPage().subscribe(page => this.articlePageDTO = page);
    
  }

  onSelect(article){
    this.router.navigate(['/articles',article.id])
  }

  first(pageNr:number){
    this.articleControllerService.getArticlesByPage(pageNr).subscribe(page => this.articlePageDTO = page);

  }

  goToAdminPage(){
    this.router.navigate(['/admin'])
  }

}
