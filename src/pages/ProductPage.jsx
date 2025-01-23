import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
// import Cart from "./Cart";

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    // Fetch product data from the API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);

        // Fetch product suggestions based on category
        fetch(`https://fakestoreapi.com/products/category/${data.category}`)
          .then((res) => res.json())
          .then((suggestedProducts) => {
            setSuggestions(
              suggestedProducts.filter((product) => product.id !== data.id)
            ); // Exclude current product
          });
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "500px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <h3 className="text-danger">₹{product.price}</h3>
          <p>{product.description}</p>
          <div className="d-flex align-items-center">
            <span className="badge bg-dark">{product.rating.rate}⭐</span>
            <span className="ms-2">{product.rating.count} reviews</span>
          </div>
          <button
            onClick={() => {
              const existingCart =
                JSON.parse(localStorage.getItem("cart")) || [];
              const existingItem = existingCart.find(
                (item) => item.id === product.id
              );

              Navigate('/cart/:id');

              let updatedCart;
              if (existingItem) {
                updatedCart = existingCart.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
              } else {
                updatedCart = [...existingCart, { ...product, quantity: 1 }];
              }

              localStorage.setItem("cart", JSON.stringify(updatedCart));
              alert("Product added to cart!");
            }}
            className="btn btn-warning mt-3 w-100"

          >
            Add to Cart
          </button>

          <button className="btn btn-dark mt-3 w-100">Buy Now</button>
          <div className="mt-4">
            <h5>More Information</h5>
            <p>
              <strong>Shipping:</strong> Delivery within 5-7 business days.
            </p>
            <p>
              <strong>Return Policy:</strong> 30-day return policy. Terms and
              conditions apply.
            </p>
            <p>
              <strong>Warranty:</strong> 1-year warranty on all parts.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Product Suggestions Section */}
      <div className="mt-5">
        <h4>Suggested Products</h4>
        <div className="row mt-4">
          {suggestions.map((suggestedProduct) => (
            <div className="col-md-4" key={suggestedProduct.id}>
              <div className="card p-4">
                <img
                  src={suggestedProduct.image}
                  className="card-img-top"
                  alt={suggestedProduct.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {suggestedProduct.title.slice(0, 20)}
                  </h5>
                  <p className="card-text fs-6 text-muted">
                    {suggestedProduct.description
                      ? suggestedProduct.description.slice(0, 60)
                      : "No description available"}
                  </p>
                  <h3 className="text-danger mt-3">
                    ₹{suggestedProduct.price}
                  </h3>
                  <a
                    href={`/product/${suggestedProduct.id}`}
                    className="btn btn-warning w-100 mt-2"
                  >
                    View Product
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer className="mt-4" />
    </div>
  );
};

export default ProductDetailPage;
