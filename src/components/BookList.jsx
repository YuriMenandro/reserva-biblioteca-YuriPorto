import BookCard from "./BookCard";

export default function BookList({ books}) {
    if (books.length === 0) {
        return <p>Nenhum livro no acervo.</p>;
    }

    return (
        <section className="book-list" aria-label="Lista de livros">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    {...book}
                />
            ))}
        </section>
    );
}