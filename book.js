class Book {
  constructor() {
    this.hardback = true;
    this.pages = 99;
    this.shelf = [];
    this.memory = [];
  }
  burnBook() {
    this.pages = 0;
  }
}
