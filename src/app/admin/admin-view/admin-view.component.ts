import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openHomePage(){
    this.router.navigate(['/home'])
  }

  openArticlesView(){
    this.router.navigate(['/article/table'])
  }

  openCreateArticleView(){
    this.router.navigate(['/article/create'])
  }
  
}
