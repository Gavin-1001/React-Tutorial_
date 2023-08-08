const Navbar = () => {

    return(
        <nav className="navbar">
            <h3>The Dojo Blog</h3>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="">New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar;