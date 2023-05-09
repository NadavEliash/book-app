const { useState, useEffect } = React
const { Link, useParams } = ReactRouterDOM

import { LongTxt } from '../cmps/long-txt.jsx'
import { AddReview } from '../cmps/add-review.jsx'
import { bookService } from '../services/book.service.js'

export function BookDetails() {

    const [book, setBook] = useState(null)

    let bookId = useParams().bookId
    useEffect(() => {
        bookService.get(bookId).then(setBook)
    }, [])

    if (!book) return (
        <div>loading...</div>
    )
    
    console.log(book)
    const bookPrice = `${book.listPrice.amount} ${book.listPrice.currencyCode}`
    const bookDate = book.publishedDate < (new Date().getYear() + 1890) ? 'Vintage' : 'New'

    function setPriceColor() {
        if (book.listPrice.amount > 150) return 'red'
        if (book.listPrice.amount < 20) return 'green'
    }

    function setReadingLevel() {
        if (book.pageCount > 500) return 'Serious Reading'
        if (book.pageCount < 100) return 'Light Reading'
        return 'Descent Reading'
    }

    const saleImg = book.listPrice.isOnSale ? "../assets/img/sale.png" : ""

    return (
        <section className="book-details">
            <h1>{book.title}</h1>
            <h2>{setReadingLevel()}</h2>
            <img src={book.thumbnail} alt="book-cover" />
            <img className="sale-img" src={saleImg} alt="" />
            <h2>{bookDate}</h2>
            <h2 className={setPriceColor()}>{bookPrice}</h2>
            <LongTxt txt={book.description} length={100} />
            <button><Link to="/book">Back</Link></button>
            <AddReview bookId={book.id} />
        </section>
    )
}