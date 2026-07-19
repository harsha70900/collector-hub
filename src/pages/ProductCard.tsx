
type ProductardProps = {
    title: string;
    category: string;
    condition : string;
    price: number;
  seller: string;
  location: string;
  image: string;

};

const ProductCard = ({
  title,
  category,
  condition,
  price,
  seller,
  location,
  image,
} : ProductardProps) => {
    return (
        <div className="product-card">

            <img src={image} 
            alt={title} 
            className="producr-image" />

            <h3>{title}</h3>

            <p>
                <strong>Category:</strong> {category}
            </p>

            <p>
        <strong>Condition:</strong> {condition}
            </p>

             <p>
        <strong>Seller:</strong> {seller}
      </p>

      <p>
        <strong>Location:</strong> {location}
      </p>

       <h2>₹{price}</h2>

       <div className="card-buttons">

        <button>View</button>

        <button>Add Collection</button>

        <button>Wishlist</button>

        </div>
        </div>
    );
};

export default ProductCard;