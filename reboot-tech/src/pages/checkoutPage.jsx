import { supabase } from "../SupabaseClient";
import { useState, useEffect } from "react";
import "./CheckoutPage.css";

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Federal Capital Territory",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

function CheckoutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [deliveryNotes, setDeliveryNotes] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("orders")
      .insert({
        full_name: name,
        email: email,
        phone: phoneNumber,
        delivery_address: address,
        city: city,
        state: state,
        delivery_notes: deliveryNotes,
      })
      .select();

    if (error) {
      console.error("Failed to save order:", error.message);
      return;
    }

    console.log("Order saved:", data);
  }

  return (
    <form className="form__container">
      <h3 className="form__header">Checkout</h3>

      <div className="form__box">
        <div className="form__top-box">
          <span className="form__box-eyebrow">Contact information</span>

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
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form__bottom-box">
          <span className="form__bottom-eyebrow">Delivery information</span>

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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="form__input">
            <label htmlFor="state" className="form__label">
              State*
            </label>

            <select
              id="state"
              name="state"
              className="form__state-input"
              value={state}
              onChange={(e) => setState(e.target.value)}
              autoComplete="address-level1"
              required
            >
              <option value="" disabled>
                Select your state
              </option>
              {nigerianStates.map((nigerianState) => (
                <option key={nigerianState} value={nigerianState}>
                  {nigerianState}
                </option>
              ))}
            </select>
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
              value={deliveryNotes}
              onChange={(e) => setDeliveryNotes(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button type="submit" className="form__submit" onClick={handleSubmit}>
        Continue to Payment
      </button>
    </form>
  );
}

export default CheckoutPage;
