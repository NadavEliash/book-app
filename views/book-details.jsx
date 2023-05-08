export function BookDetails({ book }) {
    return(
        <section className="book-details">
            <h1>{book.title}</h1>
            <img src={book.thumbnail} alt="book-cover" />
            <p>{book.description}</p>

        </section>
    )
}