import { useState } from "react";
import "./App.css";
import { books as initialBooks } from "./data/books";
import BookList from "./components/BookList";
import Panel from "./components/Panel";




export default function App() {
  const [books, setBooks] = useState(initialBooks);

  const availableCount = books.filter(
    (book) => book.available,
  ).length;

  function handleReserve(bookId) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? { ...book, available: !book.available }
          : book,
      ),
    );
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        <p>{availableCount} de {initialBooks.length} livros disponíveis.</p>
      </header>

      <Panel title="Livros do acervo" >
        <BookList books={books} onReserved={handleReserve} />
      </Panel>
    </main>
  );
}
