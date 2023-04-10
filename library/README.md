# Libary

Creating a quick libary class system for practice purposes.

## User Stories

- User can add books to library
- User can print a list of all books
- User can print a list of books by author
- User can checkout a book by index
- User can checkin a book by index
- User can print a list of books that are checked out

## Class Design

### Book

Parameters

- title (string)
- author (string)
- checkedOut (Bolean - Default as false)

Functions

- checkOut()
- checkIn()

Library

Parameters

- contents (array)

Functions

- add(book)
- printAllBooks()
- printBooksBy(author)
- checkOutIndex(i)
- checkInIndex(i)
- printCheckedOutBooks()
