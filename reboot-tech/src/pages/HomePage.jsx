import Header from '../components/Header';
import Products from '../components/Products';
import HeroImg from '../assets/hero.png';
import './HomePage.css';

function HomePage() {
    return (
        <>
            <Header />
            <main className="main__container">
                <section className="hero">
                    <div className="hero__left">
                        <h1 className="hero__left-motto">
                            Your Tech, Sorted.
                        </h1>
                        
                        <p className="hero__left-text">
                            Premium new & certified refurbished devices, backed by
                            expert fast repairs and same-day service.
                        </p>

                        <a href="#" className="hero__left-btn">
                            Shop Now
                        </a>
                    </div>

                    <div className="hero__right">
                        <img src={HeroImg} 
                        className="hero__right-image" 
                        alt="product image" 
                      
                        />
                    </div>
                </section>

                <section className="categories">
                    <div className="categories__cards">
                        <div className="category__card">
                            <i className="fi fi-rr-mobile-button card__icon"></i>

                            <span className="category__card-text">
                                Phones
                            </span>
                        </div>

                        <div className="category__card">
                            <i className="fi fi-rr-computer card__icon"></i>

                            <span className="category__card-text">
                                Laptops
                            </span>
                        </div>

                        <div className="category__card">
                            <i className="fi fi-rr-watch-smart card__icon"></i>

                            <span className="category__card-text">
                                Accessories
                            </span>
                        </div>

                        <div className="category__card">
                            <i className="fi fi-rr-headphones card__icon"></i>

                            <span className="category__card-text">
                            Audio 
                            </span>
                        </div>
                    </div>
                </section>

                <section className="products">
                    <h3 className="products__header">
                        Our Products
                    </h3>
                    
                    <Products />
                </section>
            </main>
        </>
    )
}

export default HomePage;