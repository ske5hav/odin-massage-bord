
import { useContext } from "react";
import { CartContext } from "../contex/CartContext";
import "./cart.css";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * (product.quantity || 1);
  }, 0);

  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeProduct(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      <h2>Total: ${totalPrice.toFixed(2)}</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width="100"
            />

            <div>
              <h3>{product.title}</h3>

              <p>Price: ${product.price.toFixed(2)}</p>

              <button onClick={() => decreaseQuantity(product.id)}>
                −
              </button>

              <span> Quantity: {product.quantity || 1} </span>

              <button onClick={() => increaseQuantity(product.id)}>
                +
              </button>

              <br />

              <button onClick={() => removeProduct(product.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
