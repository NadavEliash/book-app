export function BookPreview({ book }) {
    return (
        <article className="book-previwe">
            <h2>{book.title}</h2>
            <h4>price: {book.listPrice.amount} <span className="currency-code">{book.listPrice.currencyCode}</span></h4>
            <img src={book.thumbnail} alt="book's cover" />
        </article>
    )
}