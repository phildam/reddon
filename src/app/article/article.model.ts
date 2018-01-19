export class Article {
  title: string;
  article: string;
  votes: number;

  constructor(title: string, article: string, votes?: number){
    this.title=title;
    this.article=article;
    this.votes=votes || 90;
 }

  downvote() :boolean{
    this.votes -= 1;
    return false;
  }

  upvote(): boolean{
    this.votes += 1;
    return false;
  }
}
