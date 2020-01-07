class Book {
  constructor() {
    this.hardback = true;
    this.pages = 99;
    this.memory = [];
  }

  burnBook() {
    this.pages = 0;
  }
}
