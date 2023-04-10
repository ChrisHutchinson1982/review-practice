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
      const printBook = `Index: ${index} | Title: ${book.title} | Author: ${book.author} | CheckedOut: ${book.checkedOut}`;
      allBooks.push(printBook);
    });

    return allBooks.join("/n");
  }
}

module.exports = Libary;
