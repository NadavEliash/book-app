import { BookService } from '../services/book.service.js'
import { BookList } from '../cmps/book-list.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'

const { useState, useEffect } = React

export function BookIndex() {
    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState(BookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        BookService.query(filterBy).then(setBooks)
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({...prevFilter, ...filterBy}))
    }

    return (
        <section className="book-index">
            <h1>Miss Books</h1>
            <BookFilter onSetFilter={onSetFilter} filterBy={filterBy}/>
            <BookList books={books}/>
        </section>
    )
}