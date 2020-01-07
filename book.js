class Book {
  constructor() {
    this.hardback = true;
    this.pages = 99;
    this.shelf = [];
  }

  burnBook() {
    this.pages = 1;
  }
}
