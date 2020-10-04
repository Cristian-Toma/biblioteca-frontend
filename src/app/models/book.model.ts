export class BookModel {
  constructor(
    public _id: string,
    public author: string,
    public title: string,
    public edition: string,
    public keyWords: string,
    public description: string,
    public themes: string,
    public copies: string,
    public avaible: string
  ) {}
}
