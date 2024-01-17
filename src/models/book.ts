export class bookModel {
  title: string;
  author: string;
  description: string;
  img: string;
  price: number;
  genere: string;
  language: string;
  pageCount: number;
  publicationYear: string;
  url: string;
  discount: number;
  createdAt: string;
  id: string;

  constructor(
    title: string = '',
    author: string = '',
    description: string = '',
    img: string = '',
    price: number = 0,
    genere: string = '',
    language: string = '',
    pageCount: number = 0,
    publicationYear: string = '',
    url: string = '',
    discount: number = 0,
    createdAt: string = '',
    id: string = '',
  ) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.description = description;
    this.img = img;
    this.price = price;
    this.genere = genere;
    this.language = language;
    this.pageCount = pageCount;
    this.publicationYear = publicationYear;
    this.url = url;
    this.discount = discount;
    this.createdAt = createdAt;
  }
}
