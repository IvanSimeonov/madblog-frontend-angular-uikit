import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ArticleService } from "@ivannicksim/blog-api";
import { ArticleDTO } from "@ivannicksim/blog-api";
import { Router } from "@angular/router";

@Component({
  selector: "app-article-create",
  templateUrl: "./article-create.component.html",
  styleUrls: ["./article-create.component.css"]
})
export class ArticleCreateComponent implements OnInit {
  article: ArticleDTO;
  checkoutForm: FormGroup;

  constructor(
    private articleService: ArticleService,
    private formBilder: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.formBilder.group({
      title: "",
      subtitle: "",
      content: "",
      published: "true",
      created: "",
      coverImage: ""
    });
  }

  ngOnInit() {}

  onSubmit(articleData) {
    console.warn("The article has been created.", articleData);
    this.articleService
      .createArticle(articleData)
      .subscribe((currArticle: ArticleDTO) => {
        this.article = currArticle;
        console.log("created article is:", currArticle);
      });
    console.warn(articleData);
    this.checkoutForm.reset();
  }

  navigateHomePage(pageName: String) {
    this.router.navigate([`${pageName}`]);
  }

  clearFields() {
    this.checkoutForm.reset();
  }
}
