import "../app.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../pages/Card";


export default function CardBoard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })

      .catch((err) => console.error(err));
  }, []);

  const [start, end] = [0, 4];

  return (
    <div>
      <div>
        <h2 className="text-center mt-4">
          Latest <span className="badge bg-danger">Products</span>
        </h2>
        <div id="item-box" className="container-fluid">
          {data.slice(start, end).map((product, index) => (
            <Card
              key={index}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              description={product.description}
              url={product.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
