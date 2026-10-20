
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contex/CartContext";
import "./Shop.css";

function Shop() {
  const { setCart } = useContext(CartContext);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getmethod();
  }, []);

  async function getmethod() {
    try {
      const url = "https://fakestoreapi.com/products";
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Products fetch karne mein error:", error);
    }
  }

 
function addToCart(product) {
  setCart((currentCart) => {
    const existingProduct = currentCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      return currentCart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: (item.quantity || 1) + 1,
          };
        }

        return item;
      });
    }

    return [
      ...currentCart,
      { ...product, quantity: 1 },
    ];
  });
}

  return (
    <div>
      <h1>Our Products</h1>
      <p>Explore our collection.</p>

      <div className="products">
        {Products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width="150"
            />

            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
