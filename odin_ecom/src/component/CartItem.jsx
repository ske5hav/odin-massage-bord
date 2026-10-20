
import { useContext } from "react";
import { CartContext } from "../contex/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * (product.quantity || 1);
  }, 0);

  return (
    <div>
      <h1>Checkout</h1>

      <h2>Total Amount: ${totalPrice.toFixed(2)}</h2>

      <button>Place Order</button>
    </div>
  );
}

export default Checkout;
