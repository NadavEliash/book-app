const { Link } = ReactRouterDOM

import { BookPreview } from '../cmps/book-preview.jsx'

export function BookList({ books, onSelectBook, onRemoveBook }) {



    return (
        <ul className="book-list">
            {books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div className="book-li-btn">
                    <button><Link to={`/book/edit/${book.id}`}>Edit</Link></button>
                    <button><Link to={`/book/${book.id}`}>Details</Link></button>
                    <button onClick={() => onRemoveBook(book.id)}>remove</button>
                </div>
            </li>
            )}
        </ul>)
}