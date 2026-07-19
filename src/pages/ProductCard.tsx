import { useNavigate } from "react-router-dom";
import type { Product } from "../types/Product";

type ProductCardProps = {
  product: Product;
  onAddToWishlist?: (product: Product) => void;
};

const ProductCard = ({
  product,
  onAddToWishlist,
}: ProductCardProps) => {

  const navigate = useNavigate();

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <h3>{product.title}</h3>

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

      <h2>₹{product.price}</h2>

      <div className="card-buttons">

        <button
          onClick={() => navigate(`/product/${product.id}`)}
        >
          👁 View
        </button>

        {onAddToWishlist && (
          <button
            onClick={() => onAddToWishlist(product)}
          >
            ❤️ Wishlist
          </button>
        )}

      </div>

    </div>
  );
};

export default ProductCard;