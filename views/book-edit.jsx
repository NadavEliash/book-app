const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptybook())
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.bookId) loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBookToEdit)
            .catch(err => {
                console.log('error in book edit')
                navigate('/book')
            })
    }

 

    function handleChange({target}){
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setBookToEdit(prevBook => ({...prevBook, [field]: value}))
    }

    function handlePriceChange({target}){
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        const listPrice = {...bookToEdit.listPrice, [field]: value}
        setBookToEdit(prevBook => ({...prevBook, listPrice: listPrice}))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
        .then(()=> {
            navigate('/book')
        })
    }

    return (
        <section className="book-edit">
            <h2>{bookToEdit.id ? 'Edit' : 'Add'} Book</h2>

            <form onSubmit={onSaveBook} >
                <label htmlFor="title">Title:</label>
                <input onChange={handleChange} value={bookToEdit.title} type="text" name="title" id="title" />

                <label htmlFor="description">Description:</label>
                <input onChange={handleChange} value={bookToEdit.description} type="text" name="description" id="description" />

                <label htmlFor="amount">price:</label>
                <input onChange={handlePriceChange} value={bookToEdit.listPrice.amount} type="number" name="amount" id="amount" />
                <select onChange={handlePriceChange} name="currencyCode" id="currencyCode">
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="ILS">ILS</option>
                </select>

                <button onClick={onSaveBook}>{bookToEdit.id ? 'Save' : 'Add'}</button>
            </form>

        </section>
    )
}