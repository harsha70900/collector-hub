import ProductCard from "./ProductCard";
import { useCollection } from "../context/CollectionContext";

const Collection = () => {

  const {
    wishlist,
    removeFromWishlist,
  } = useCollection();

  return (
    <div className="page">

      <h1 className="page-title">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (

        <p>Your wishlist is empty.</p>

      ) : (

        <div className="product-grid">

          {wishlist.map((product) => (

            <div key={product.id}>

              <ProductCard
                product={product}
              />

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromWishlist(product.id)
                }
              >
                🗑 Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Collection;