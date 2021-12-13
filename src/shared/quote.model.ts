export class Quote {
  constructor(
    public id: string,
    public author: string,
    public quote: string,
    public createdAt: Date,
    public likes: number = 0,
    public dislikes: number = 0
  ) {

  }
}