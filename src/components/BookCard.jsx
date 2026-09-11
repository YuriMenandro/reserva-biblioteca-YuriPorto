export default function BookCard({
    title,
    author, 
    available
})  {
    return (
        <article className={`book-card`}>
            <div>
                <h2>{title}</h2>
                <p>{author}</p>
            </div>

            <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
            {available ? "Disponível" : "Reservado"}
            </span>         
        </article>
    );
}