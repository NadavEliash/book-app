const { useState } = React

import { HomePage } from './views/home-page.jsx'
import { AboutUs } from './views/about.jsx'
import { BookIndex } from './views/book-index.jsx'

export function App() {

    const [page, setPage] = useState('home')

    function handlePage(page) {
        setPage(page)
    }


    return (
        <section className="app main-layout">
            <header className="app-header main-layout">
                <h1>Miss Books App</h1>
                <nav className="app-nav">
                    <a onClick={() => handlePage('home')} href="#">Home</a>
                    <a onClick={() => handlePage('books')} href="#">Books</a>
                    <a onClick={() => handlePage('about')} href="#">About</a>
                </nav>
            </header>
            <main>
                {page === 'home' && <HomePage />}
                {page === 'about' && <AboutUs />}
                {page === 'books' && <BookIndex />}
            </main>
        </section>
    )
}