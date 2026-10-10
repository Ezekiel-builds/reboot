import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <span className="header__logo-text">
                    Reboot
                </span>
            </div>

            <nav className="nav__links">
                <a href="" className="nav__link">Shop</a>
                <a href="" className="nav__link">Repairs</a>
            </nav>

            <div className="header__meta">
                <i className="fi fi-rr-user"></i>
                <i className="fi fi-rr-shopping-bag"></i>
            </div>
        </header>
    )
}

export default Header;