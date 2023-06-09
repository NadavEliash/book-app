const { useState } = React

const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM


import { AppHeader } from './cmps/app-header.jsx'
import { HomePage } from './views/home-page.jsx'
import { AboutUs } from './views/about.jsx'
import { BookIndex } from './views/book-index.jsx'
import { BookDetails } from './views/book-details.jsx'
import { BookEdit } from './views/book-edit.jsx'

export function App() {

    const [page, setPage] = useState('home')

    function onSetPage(page) {
        setPage(page)
    }


    return (
        <Router>
            <section className="app main-layout">
                <AppHeader onSetPage={onSetPage} />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}