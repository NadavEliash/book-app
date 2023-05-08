import { BookPreview } from '../cmps/book-preview.jsx'

export function BookList({ books }) {

    return (<ul className="book-list">
        {books.map(book => <li key={book.id}>
            <BookPreview book={book} />
            <button>read</button>
            <button>remove</button>
        </li>
        )}
    </ul>)
}