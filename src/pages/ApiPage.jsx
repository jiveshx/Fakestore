import "../app.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "../components/Footer";

export default function CardBoard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center">
          Latest <span className="badge bg-danger">Products</span>
        </h2>

        <div id="item-box" className="container-fluid m-auto">
          {loading ? (
            data.map((product, index) => {
                return (
                  <Card
                    key={index}
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                    description={product.description}
                    url={product.url}
                  />
                );
              })
          ) : (
            <div
              className="spinner-border d-flex justify-content-center"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
