
import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../contex/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  return (
    <div className="main">
      <h1>ShOp KaRo</h1>
      <h1>ODIN</h1>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </div>
  );
};

export default Navbar;
