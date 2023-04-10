class Libary {
  constructor() {
    this.contents = [];
  }

  add(book) {
    this.contents.push(book);
  }

  printAllBooks() {
    let allBooks = [];

    this.contents.forEach((book, index) => {
      allBooks.push(this.#printFormat(book, index));
    });

    return allBooks.join("/n");
  }

  #printFormat(book, index) {
    return `Index: ${index} | Title: ${book.title} | Author: ${book.author} | CheckedOut: ${book.checkedOut}`;
  }
}

module.exports = Libary;
