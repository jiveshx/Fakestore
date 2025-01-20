import { Link } from 'react-router-dom';

const Card = ({ id, image, title, category, price, description }) => {
  return (
    <div className="w-fit-content card d-flex align-items-center justify-content-center bg-light text-dark mb-3 my-3 mx-3 px-2 py-2">
      <img
        src={image}
        id="img"
        className="img-fluid card-img-top fluid-image"
        style={{ height: "60%", width: "60%" }}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title w-100">{title.slice(0, 30)}</h5>
        <p>{category}</p>
        <h3 className="text-danger mt-3">₹{price}</h3>
        <p className="card-text fs-6 text-muted">
          {description ? description.slice(0, 60) : "No description available"}
        </p>
        {/* Updated Link here */}
        <Link to={`/product/${id}`} className="btn btn-warning fw-semibold text-dark w-100">
          Buy now
        </Link>
      </div>
    </div>
  );
};

export default Card;
