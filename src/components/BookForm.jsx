import { useState } from "react";

export default function BookForm({ onAddBook }) {
    const [form, setForm] = useState({ title: "", author: "", year: "" });
    const [error, setError] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;
    
        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
    
        const title = form.title.trim();
        const author = form.author.trim();
        const year = form.year.trim();
    
        if (!title || !author) {
            setError("Preencha o título e o autor!");
            return;
        }
        
        onAddBook({
            id: crypto.randomUUID(),
            title,
            author,
            year,
            available: true,
        });

        setForm({ title: "", author: "", year: ""});
        setError("");
    }
        return (
            <form className="book-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="title">Título:</label>
                    <input
                        id="title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Ex.: Crime e Castigo"
                    />
                </div>
        
                <div className="field">
                    <label htmlFor="author">Autor:</label>
                    <input
                        id="author"
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        placeholder="Ex.: Fiódor Dostoiévski"
                    />
                </div>

                <div className="field">
                    <label htmlFor="year">Ano:</label>
                    <input
                        id="year"
                        name="year"
                        value={form.year}
                        onChange={handleChange}
                        placeholder="Ex.: 1834"
                    />
                </div>

                {error && <p className="form-error">{error}</p>}
            <button type="submit">Adicionar Livro</button>
        </form>
    );
}