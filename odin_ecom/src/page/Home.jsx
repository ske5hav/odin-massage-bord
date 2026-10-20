
import { Link } from "react-router";
import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div>
          <p className="tag">WELCOME TO OUR STORE</p>
          <h1>Find Your Favorite Products</h1>
          <p>
            Explore our collection of quality products
            at great prices.
          </p>
          <Link to="/shop" className="shop-btn">
            Shop Now →
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="Featured product"
          />
        </div>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>
        <p>Check out some of our popular products.</p>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />

              <h3>{product.title}</h3>

              <p className="price">
                ${product.price}
              </p>

              <Link to="/shop" className="view-btn">
                View Products
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
