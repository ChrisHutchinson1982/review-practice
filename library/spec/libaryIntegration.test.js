const Book = require("../lib/book");
const Libary = require("../lib/library");

describe("Library Integation tests", () => {
  xit("A user can add a book and see a printed list", () => {
    const library = new Libary();

    const book = new Book("Gruffalo", "Julia Donaldson");
    library.add(book);

    expect(library.printAllBooks()).toEqual(
      "Index: 0 | Title: Gruffalo | Author: Julia Donaldson | CheckedOut: False"
    );
  });
});
