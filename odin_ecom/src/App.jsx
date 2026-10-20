
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Cart from "./page/Cart";
import { CartProvider } from "./contex/CartContext";
import "./App.css"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
