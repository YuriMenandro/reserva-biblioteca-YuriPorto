import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <section>
            <h1>Página não encontrada</h1>
            <p>O endereço informado não corresponde a uma rota.</p>
            <Link to="/">Voltar ao início</Link>
        </section>
    );
}