import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ArticleService } from "@ivannicksim/blog-api";
import { ArticleDTO } from "@ivannicksim/blog-api";
import { Router, ActivatedRoute } from "@angular/router";

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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.checkoutForm = this.formBilder.group({
      id: "",
      title: "",
      subtitle: "",
      content: "",
      published: "true",
      featured: "true",
      created: "",
      coverImage: ""
    });
  }

  ngOnInit() {
    const articleId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(articleId);
    this.articleService
      .getArticleById(+articleId)
      .subscribe((articleDTO: ArticleDTO) => {
        this.checkoutForm.setValue(articleDTO);
      });
    // this.checkoutForm.patchValue({title: currArticle.title});
  }

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

  updateArticle(articleData){
    console.warn("Article has been updated",articleData);
    // this.articleService.editArticle(articleData).subscribe((currArticle: ArticleDTO) => {
    //   this.article = currArticle;
    //   console.log("Updated article is:",currArticle);
    // })
  }

}
