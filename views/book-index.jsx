const { useState, useEffect } = React
const {Link} = ReactRouterDOM

import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/book-list.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
import { BookDetails } from './book-details.jsx'


export function BookIndex() {
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(setBooks)
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function onSelectBook(book) {
        setSelectedBook(book)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatesBooks = books.filter(book => book.id !== bookId)
            setBooks(updatesBooks)
        })
    }

    return (
        <section className="book-index">
            <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
            <button><Link to='/book/edit'>Add book</Link></button>
            <BookList books={books} onSelectBook={onSelectBook} onRemoveBook={onRemoveBook} />
        </section>
    )
}