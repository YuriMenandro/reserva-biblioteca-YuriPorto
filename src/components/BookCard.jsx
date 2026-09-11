export default function BookCard({
    id,
    title,
    author, 
    year,
    available,
    onReserved,
})  {
    return (
        <article className={`book-card`}>
            <div>
                <h2>{title}</h2>
                <p>{author}</p>
                <p>{year}</p>
            </div>



            <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
            {available ? "Disponível" : "Reservado"}
            </span>

            <button type="button" onClick={() => onReserved(id)}>
                {available ? "Reservar" : "Devolver"}
            </button>

        </article>
    );
}