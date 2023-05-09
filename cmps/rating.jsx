const { useState, useRef } = React

export function Rating({onRating}) {

    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)


    function onSetRating({target}){
        const starIdx = target.name
        setRating(starIdx)
        onRating(starIdx)
    }


    return (
        <section className="rating-container">
            <div className="star-rating">
                <img className="star" name="1" src="../assets/img/star.svg" alt="" onClick={onSetRating} />
                <img className="star" name="2" src="../assets/img/star.svg" alt="" onClick={onSetRating} />
                <img className="star" name="3" src="../assets/img/star.svg" alt="" onClick={onSetRating} />
                <img className="star" name="4" src="../assets/img/star.svg" alt="" onClick={onSetRating} />
                <img className="star" name="5" src="../assets/img/star.svg" alt="" onClick={onSetRating} />
            </div>
            <p>Rating: {rating}</p>
        </section>
    )
}