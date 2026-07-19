import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCollection } from "../context/CollectionContext";

const ProductDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { addToWishlist } = useCollection();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-details">

      <img
        src={product.image}
        alt={product.title}
        className="details-image"
      />

      <div className="details-info">

        <h1>{product.title}</h1>

        <h2>₹{product.price}</h2>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Condition:</strong> {product.condition}
        </p>

        <p>
          <strong>Seller:</strong> {product.seller}
        </p>

        <p>
          <strong>Location:</strong> {product.location}
        </p>

        <div className="details-buttons">

          <button onClick={() => addToWishlist(product)}>
            ❤️ Add to Wishlist
          </button>

          <button onClick={() => navigate(-1)}>
            ← Back
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;