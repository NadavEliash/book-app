const {Link} = ReactRouterDOM

export function AppHeader({onSetPage}) {

    return (
        <header className="app-header full main-layout">
            <div className="header-container">
                <h1>Welcome to Ms Book</h1>
                <nav className="app-nav">
                    <Link className="nav-link" to="/" >Home</Link>
                    <Link className="nav-link" to="/book" >Books</Link>
                    <Link className="nav-link" to="/about" >About</Link>
                </nav>
            </div>
        </header>
    )
}