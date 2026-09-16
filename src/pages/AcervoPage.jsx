import BookList from "../components/BookList";
import { useContext } from "react";
import Panel from "../components/Panel";
import { BooksContext } from "../context/BooksContext";

export default function AcervoPage() {
const { books, availableCount } = useContext(BooksContext);

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        <p>{availableCount} de {books.length} livros disponíveis.</p>
      </header>

      <Panel title="Livros do acervo" >
        <BookList />
      </Panel>
    </main>
  );
}