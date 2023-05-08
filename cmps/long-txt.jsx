const { useState, useEffect } = React

export function LongTxt({ txt, length }) {

    const [txtLength, setTxtLength] = useState(length)

    function onToggleLength() {
        if (txtLength === length) {
            return {
                length: txt.length,
                btn: 'More'
            }
        } else {
            return {
                length,
                btn: 'Less'
            }
        }
    }

    return (
        <section className="long-txt">
            <p>{txt.substring(0, txtLength)}</p>
            {txt.length > length && <button onClick={(() => setTxtLength(onToggleLength().length))}>
                {onToggleLength().btn}</button>}
        </section>
    )
}