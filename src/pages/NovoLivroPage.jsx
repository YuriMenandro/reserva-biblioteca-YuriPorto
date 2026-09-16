import Panel from "../components/Panel";
import BookForm from "../components/BookForm"

export default function NovoLivroPage() {
    return (
        <>
            <h1>Novo hábito</h1>
            <Panel title="Cadastre um novo livro">
                <BookForm />
            </Panel>
        </>
    );
}