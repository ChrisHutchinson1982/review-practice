const Book = require("../lib/book");

describe("Creates a book object", () => {
  it("when Title is Gruffalo and Author Julia Donaldson and defaults checkedOut to false", () => {
    const book = new Book("Gruffalo", "Julia Donaldson");
    expect(book.title).toBe("Gruffalo");
    expect(book.author).toBe("Julia Donaldson");
    expect(book.checkedOut).toBe(false);
  });
});
