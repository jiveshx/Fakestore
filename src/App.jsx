import   { useState , Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ApiPage from "./pages/ApiPage";
// import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Table from "./pages/Table";
import ProductDetailPage from "./pages/ProductPage";
import CartSummary from "./pages/Cart";
// import LazyComp from "./pages/LazyComp";

function App(products) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter products based on the search term
    if (value) {
      const suggestions = products.filter((product) =>
        product.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(suggestions);
    } else {
      setFilteredProducts([]);
    }
  };
  return (
    <Router basename="/fakestore">
      <nav id="navi" className="navbar navbar-expand-lg p-3">
        <div className="container-fluid">
          <Link className="navbar-brand badge bg-danger text-light fs-4" to="/">
            FakeStore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white fw-semibold" to="/api">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-semibold"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-semibold"
                  to="/table"
                >
                  Table
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-semibold"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex position-relative ">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search products..."
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-warning" type="button">
                Search
              </button>
              <button type="button" className="btn btn-danger fw-semibold mx-2">
                <NavLink
                  to={"/cart/:id"}
                  className="text-white nav-link"
                >
                  Cart
                </NavLink>
              </button>
              {filteredProducts.length > 0 && (
                <ul
                  className="list-group position-absolute mt-5"
                  style={{
                    zIndex: 1000,
                    backgroundColor: "#fff",
                    width: "100%",
                    borderRadius: "4px",
                  }}
                >
                  {filteredProducts.map((product, index) => (
                    <li key={index} className="list-group-item">
                      {product}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <Home/> */}
      <div className="container-fluid p-2">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/table" element={<Table />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart/:id" element={<CartSummary />} />
          {/* <Suspense fallback={<div>Loading...</div>}>
            <Route path="/lazyComp" element={<LazyComponent/>}/>
          </Suspense> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
