import { useState, useEffect } from "react";
import "./App.css";
import { books, books as initialBooks } from "./data/books";
import BookList from "./components/BookList";
import Panel from "./components/Panel";
import BookForm from "./components/BookForm"

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

export default function App() {
  const [books, setBooks] = useState(loadBooks);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const availableCount = books.filter(
    (book) => book.available,
  ).length;

  const visibleBooks = showOnlyAvailable ? books.filter(
    (book) => book.available
  ) : books;

  useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    }, [books]);

  function handleReserve(bookId) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? { ...book, available: !book.available }
          : book,
      ),
    );
  }

  function handleAddBook(newBook) {
    setBooks((currentBooks) => [
      ...currentBooks,
      newBook,
    ]);
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        <p>{availableCount} de {books.length} livros disponíveis.</p>
      </header>

      <Panel title="Novo Livro">
        <BookForm onAddBook={handleAddBook} />
      </Panel>

      <label>
        <input
          type="checkbox"
          checked={showOnlyAvailable}
          onChange={() => setShowOnlyAvailable((current) => !current)}
        />
        Mostrar só disponíveis
      </label>

      <Panel title="Livros do acervo" >
        <BookList books={visibleBooks} onReserved={handleReserve} />
      </Panel>
    </main>
  );
}
