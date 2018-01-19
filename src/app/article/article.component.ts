import { Component, OnInit, Input,HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass='w3-row';
  name: string;
 
  articles: Article[];
  
  

  @Input() surname: String;
  @Input() article: Article
  constructor() { 
   
    
  }

  ngOnInit() {

  }

  downvote() :boolean{
    this.article.downvote();
    return false;
  }

  upvote(): boolean{
    this.article.upvote();
    return false;
  }
}
