const Book = require("../lib/book");
const Libary = require("../lib/library");

describe("Library Integation tests", () => {
  it("A user can add a book and see a printed list", () => {
    const library = new Libary();

    const book = new Book("Gruffalo", "Julia Donaldson");
    library.add(book);

    expect(library.printAllBooks()).toEqual(
      "Index: 0 | Title: Gruffalo | Author: Julia Donaldson | CheckedOut: false"
    );
  });
  it("A user can add two books and see a printed list", () => {
    const library = new Libary();

    const book1 = new Book("Gruffalo", "Julia Donaldson");
    library.add(book1);

    const book2 = new Book("Twits", "Roald Dahl");
    library.add(book2);

    expect(library.printAllBooks()).toEqual(
      "Index: 0 | Title: Gruffalo | Author: Julia Donaldson | CheckedOut: false/nIndex: 1 | Title: Twits | Author: Roald Dahl | CheckedOut: false"
    );
  });
});
