import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    // Retrieve cart data from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const navigate = useNavigate();

  // Increase quantity of a product
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease quantity of a product
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h1>Cart Summary</h1>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate("/")} className="btn btn-warning">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="col-md-12 mb-4">
                <div className="d-flex align-items-center border p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "contain",
                    }}
                    className="me-4"
                  />
                  <div className="flex-grow-1">
                    <h5>{item.title}</h5>
                    <p className="text-muted">₹{item.price}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary me-2"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary ms-2"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-3"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
            <button className="btn btn-success mt-3">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
