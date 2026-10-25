import './CheckoutPage.css';

function CheckoutPage() {
    return (
        <form className="form__container">
            <h3 className="form__header">
                Checkout
            </h3>

            <div className="form__box">
                <div className="form__top-box">
                    <span className="form__box-eyebrow">
                        Contact information
                    </span>

                    <div className="form__input">
                        <label htmlFor="name" className="form__label">
                            Full name*
                        </label>

                        <input
                            id="name"
                            name="full_name"
                            type="text"
                            className="form__name-input"
                            placeholder="Enter your full name"
                            autoComplete="name"
                            required
                        />
                    </div>

                    <div className="form__input">
                        <label htmlFor="email" className="form__label">
                            Email address*
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form__email-input"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="form__input">
                        <label htmlFor="phone" className="form__label">
                            Phone number*
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="form__number-input"
                            placeholder="08012345678"
                            autoComplete="tel"
                            required
                        />
                    </div>
                </div>

                <div className="form__bottom-box">
                    <span className="form__bottom-eyebrow">
                        Delivery information
                    </span>

                    <div className="form__input">
                        <label htmlFor="address" className="form__label">
                            Delivery address*
                        </label>

                        <input
                            id="address"
                            name="delivery_address"
                            type="text"
                            className="form__address-input"
                            placeholder="House number and street name"
                            autoComplete="street-address"
                            required
                        />
                    </div>

                    <div className="form__input">
                        <label htmlFor="city" className="form__label">
                            City / LGA*
                        </label>

                        <input
                            id="city"
                            name="city"
                            type="text"
                            className="form__city-input"
                            placeholder="Enter your city or LGA"
                            required
                        />
                    </div>

                    <div className="form__input">
                        <label htmlFor="state" className="form__label">
                            State*
                        </label>

                        <input
                            id="state"
                            name="state"
                            type="text"
                            className="form__state-input"
                            placeholder="Enter your state"
                            autoComplete="address-level1"
                            required
                        />
                    </div>

                    <div className="form__input">
                        <label htmlFor="delivery-notes" className="form__label">
                            Delivery notes (optional)
                        </label>

                        <textarea
                            id="delivery-notes"
                            name="delivery_notes"
                            className="form__notes-input"
                            placeholder="Any directions to help us find you?"
                            rows="3"
                        />
                    </div>
                </div>
            </div>

            <button type="submit" className="form__submit">
                Continue to Payment
            </button>
        </form>
    );
}

export default CheckoutPage;
