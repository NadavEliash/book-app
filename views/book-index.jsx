import { BookService } from '../services/book.service.js'
import { BookList } from '../cmps/book-list.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
import { BookDetails } from './book-details.jsx'

const { useState, useEffect } = React

export function BookIndex() {
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(BookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        BookService.query(filterBy).then(setBooks)
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function onSelectBook(book) {
        setSelectedBook(book)
    }

    function onRemoveBook(bookId) {
        BookService.remove(bookId).then(() => {
            const updatesBooks = books.filter(book => book.id !== bookId)
            setBooks(updatesBooks)
        })
    }

    return (
        <section className="book-index">
            {!selectedBook && <React.Fragment>
                <h1>Miss Books</h1>
                <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
                <BookList books={books} onSelectBook={onSelectBook} onRemoveBook={onRemoveBook} />
            </React.Fragment>}

            {selectedBook && <BookDetails onBack={() => setSelectedBook(null)} book={selectedBook} />}
        </section>
    )
}