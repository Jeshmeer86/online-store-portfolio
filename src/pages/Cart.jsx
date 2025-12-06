// src/pages/Cart.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="section">
        <h1>Your cart is empty</h1>
        <Link to="/products" className="btn">
          Go shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="section">
      <h1>Your Cart</h1>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.product.id} className="cart-item">
            <div>
              <h3>{item.product.name}</h3>
              <p>
                Quantity: {item.quantity} × AED {item.product.price}
              </p>
            </div>
            <button
              className="btn btn--outline"
              onClick={() => removeFromCart(item.product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: AED {totalPrice}</p>
      <Link to="/checkout" className="btn">
        Proceed to Checkout
      </Link>
    </main>
  );
}
