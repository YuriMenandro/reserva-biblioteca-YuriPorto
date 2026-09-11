import "./App.css";
import { books } from "./data/books";
import BookList from "./components/BookList";

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
      </header>

      <BookList books={books} />
      
    </main>
  );
}
