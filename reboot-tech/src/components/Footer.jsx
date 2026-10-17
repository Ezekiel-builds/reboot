import './Footer.css';

function Footer() {
    return (
      <footer className="footer__container">
        <div className="footer__left">
             <div className="header__logo">
                    <span className="header__logo-text">
                        Reboot
                    </span>
            </div>

            <p className="footer__left-text">
                Your trusted destination for premium electronics,
                diagnostics, and certified device repairs.
            </p>

            <div className="message__button">
                <a href="#" className="message__button-btn">
                   <i className="fi fi-rr-messages"></i> Chat on WhatsApp
                </a>
            </div>
        </div>

        <div className="footer__center">
            <h4 className="footer__center-header">
                QUICK LINKS
            </h4>

            <nav className="footer__quick-links">
                <a href="#" className="footer__quick-link">Shop</a> 
                <a href="#" className="footer__quick-link">Repairs</a> 
                <a href="#" className="footer__quick-link">Cart</a> 
            </nav>
        </div>

        <div className="footer__right">
            <h4 className="footer__right-header">
                CONTACT
            </h4>

            <div className="footer__right-meta">
                <p className="footer__tel"><i className="fi fi-rr-phone-plus"></i> +1 (555) 382-9011</p>
                <p className="footer__support"><i className="fi fi-rr-envelope"></i> support@reboot.com</p>
                <p className="footer__address"><i className="fi fi-rr-marker"></i> 442 Innovation Way, Suite 100</p>
            </div>
        </div>
      </footer>
    );
}

export default Footer;