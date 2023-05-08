import { BookPreview } from '../cmps/book-preview.jsx'

export function BookList({ books, onSelectBook, onRemoveBook }) {



    return (<ul className="book-list">
        {books.map(book => <li key={book.id}>
            <BookPreview book={book} />
            <button onClick={()=>onSelectBook(book)}>read</button>
            <button onClick={()=>onRemoveBook(book.id)}>remove</button>
        </li>
        )}
    </ul>)
}