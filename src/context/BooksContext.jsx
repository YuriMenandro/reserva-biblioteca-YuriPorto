import { createContext, useEffect, useState } from "react";
import { books } from "../data/books";

const STORAGE_KEY = "reserva-biblioteca:books";

function loadBooks() {
  const savedbooks = localStorage.getItem(STORAGE_KEY)

  if (!savedbooks) return books;

  try {
    const parsedBooks = JSON.parse(savedbooks);
        return Array.isArray(parsedBooks) ? parsedBooks : books;
  } catch {
    return (books)
  }

}

export const BooksContext = createContext(null);

export function BooksProvider ({ children }) {
    const [books, setBooks] = useState(loadBooks);

    const availableCount = books.filter(
        (book) => book.available,
    ).length;

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    }, [books]);

    function addBook(newBook) {
        setBooks((current) => [...current, newBook]);
    }
    function toggleBook(bookId) {
        setBooks((current) =>
            current.map((book) =>
                book.id === bookId
                    ? { ...book, available: !book.available }
                    : book,
            )
        );
    }

    const value = {
        books,
        availableCount,
        toggleBook,
        addBook
    };
    return (
        <BooksContext.Provider value={value}>
            {children}
        </BooksContext.Provider>
    );
}
