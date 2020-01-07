import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticlePageDTO } from '@ivan-gen/blog-api';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-article-paginator',
  templateUrl: './article-paginator.component.html',
  styleUrls: ['./article-paginator.component.css']
})
export class ArticlePaginatorComponent implements OnInit {

  @Input()articlePageDTO: ArticlePageDTO = {totalPages:0};
  @Output()loadPage = new EventEmitter<number>();
  // page = this.articlePageDTO.totalPages;

  totalPages : Array<number>;


  constructor() { }

  ngOnInit() {

          this.totalPages = Array(this.articlePageDTO.totalPages).fill(1);
    
  }

  loadPageByNumber(number){
    if(number < this.articlePageDTO.totalPages){
    this.loadPage.emit(number);
    }
  }


}
