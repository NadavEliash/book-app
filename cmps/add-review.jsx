const { useEffect, useState } = React

import { Rating } from '../cmps/rating.jsx'
import { bookService } from '../services/book.service.js'

export function AddReview({ bookId }) {

    const [review, setReview] = useState({})

    function onAddReview(ev) {
        ev.preventDefault()
        bookService.addReview(bookId, review)
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.value

        setReview(prevReview => ({...prevReview, [field]: value}))
    }

    function onRating(starIdx) {
        setReview(prevReview => ({...prevReview, rating: starIdx}))
    }


    return (
        <section className="add-review">
            <form>
                <label htmlFor="fullName">Add your full name:</label>
                <input onChange={handleChange} type="text" name="fullName" id="fullName" />
                <label htmlFor="readAt">When did you read the book:</label>
                <input onChange={handleChange} type="date" name="readAt" id="readAt" />
            </form>
            <Rating onRating={onRating}/>
            <button onClick={onAddReview}>Add review</button>
        </section>
    )
}