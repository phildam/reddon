import { Component } from '@angular/core';
import { Article } from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];  

  constructor(){
     this.articles= [
     new Article('Full stack dev',
    'sdmfm sndnllnd', 10),
     new Article('angular devs',
    'sdmfm sndnllnd', 10),
     new Article('ruby devs',
    'sdmfm sndnllnd', 10)

    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log('Adding article title: ' + title.value);
    this.articles.push(new Article(title.value, link.value,0));
    title.value='';
    link.value='';
    return false;
  }
   
  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
