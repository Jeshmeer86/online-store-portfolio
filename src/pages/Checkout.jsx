// src/pages/Checkout.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="section">
        <h1>Order placed!</h1>
        <p>This is a demo checkout for your portfolio store.</p>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="section">
        <h1>No items to checkout</h1>
      </main>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  return (
    <main className="section">
      <h1>Checkout</h1>
      <p>Total: AED {totalPrice}</p>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input required />
        </label>
        <label>
          Email
          <input type="email" required />
        </label>
        <label>
          Address
          <textarea required />
        </label>
        <button className="btn" type="submit">
          Place Order (Demo)
        </button>
      </form>
    </main>
  );
}
