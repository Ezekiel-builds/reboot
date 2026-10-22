import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from './CartProvider';
import './Header.css';

function Header() {
    const { cartItems } = useContext(cartContext)
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/" className="header__logo-text">
                    Reboot
                </Link>
            </div>

            <nav className="nav__links">
                <a href="" className="nav__link">Shop</a>
                <a href="" className="nav__link">Repairs</a>
            </nav>

            <div className="header__meta">
                <i className="fi fi-rr-user"></i>
                <i className="fi fi-rr-shopping-bag"></i>
                <span className="cart__items">{cartItems.length}</span>
            </div>
        </header>
    )
}

export default Header;