// src/App.jsx
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import PortfolioHome from "./pages/PortfolioHome";
import StoreHome from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

import "./styles/global.css";

function RedirectToStoreProduct() {
  const { id } = useParams();
  return <Navigate to={`/store/products/${id}`} replace />;
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <Routes>
          <Route path="/" element={<PortfolioHome />} />

          <Route path="/store" element={<StoreHome />} />
          <Route path="/store/products" element={<Products />} />
          <Route path="/store/products/:id" element={<ProductDetails />} />
          <Route path="/store/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/products"
            element={<Navigate to="/store/products" replace />}
          />
          <Route path="/products/:id" element={<RedirectToStoreProduct />} />
          <Route path="/cart" element={<Navigate to="/store/cart" replace />} />
          <Route
            path="/checkout"
            element={<Navigate to="/store/checkout" replace />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
