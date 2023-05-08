const { useState, useEffect } = React

export function BookFilter({filterBy, onSetFilter}) {

    const [filterEdit, setFilterEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterEdit)
    }, [filterEdit])

    function handleChange({ target }) {
        console.log(target)
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterEdit)
    }

    const {txt, maxPrice} = filterEdit
    return (
        <section className="book-filter">
            <h2>Filter Books</h2>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Title: </label>
                <input value={txt} name="txt" id="txt" type="text" onChange={handleChange} />
                <label htmlFor="maxPrice">Max Price</label>
                <input value={maxPrice} onChange={handleChange} type="number" name="maxPrice" id="maxPrice" />
            </form>
        </section>
    )
}