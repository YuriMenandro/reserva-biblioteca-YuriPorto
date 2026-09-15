import { useState } from "react";
import BookCard from "./BookCard";
import { BooksContext } from "../context/BooksContext";
import { useContext } from "react";

export default function BookList() {
    const { books, toggleBook } = useContext(BooksContext);
    const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
    const visibleBooks = showOnlyAvailable ? books.filter((book) => book.available) : books;

    if (books.length === 0) {
        return <p>Nenhum livro no acervo.</p>;
    }

    return (
        <section className="book-list" aria-label="Lista de livros">
            {visibleBooks.map((book) => (
                <BookCard
                    key={book.id}
                    {...book}
                    onReserved={toggleBook}
                />
            ))}

            <label>
                <input
                    type="checkbox"
                    checked={showOnlyAvailable}
                    onChange={() => setShowOnlyAvailable((current) => !current)}
                />
                Mostrar só disponíveis
            </label>
        </section>
    );
}