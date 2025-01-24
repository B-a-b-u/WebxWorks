import Logo from "../../assets/logo.png"

const Navbar = () => {
    return(
        <>
            <nav className="navbar-container">
                <div className="logo">
                    <img src={Logo} />
                </div>

                <div className="nav-links">
                <a href="home">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>

                </div>
            </nav>
        </>
    )
}

export default Navbar;