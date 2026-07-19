import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { useState } from "react";

const Marketplace = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [selectedCategory, setselectedCategory] = useState("All Categories");
  const [selectedCondition, setselectedCondition] = useState("All Conditions");
  const [sortBy, setsortBy] = useState("Newest")

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
        product.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

    const matchesCategory =
        selectedCategory === "All Categories" ||
        product.category === selectedCategory;

    const matchesCondition = 
        selectedCondition === "All Conditions" ||
        product.condition === selectedCondition;

    return (matchesSearch && matchesCategory && matchesCondition);

});

const sortedProducts = [...filteredProducts];

if(sortBy == "Price Low to High") {
  sortedProducts.sort((a,b) => a.price - b.price);
}

if (sortBy === "Price High to Low") {
  sortedProducts.sort((a, b) => b.price - a.price);
}

  return (
    <div className="page">
      <h1 className="page-title">Marketplace</h1>

       <div className="marketplace-controls">

        <input 
        type="text" 
        placeholder="Search collectibles..." 
        className="search-input" 
        value={searchTerm}
        onChange={(e)=>setsearchTerm(e.target.value)}
        />

        <select className="filter-select" value={selectedCategory} 
        onChange={(e)=>setselectedCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option>Trading Cards</option>
          <option>Coins</option>
          <option>Comics</option>
          <option>Figures</option>
        </select>

        <select className="filter-select" value={selectedCondition} 
        onChange={(e)=>setselectedCondition(e.target.value)}>
          <option>All Conditions</option>
          <option>Mint</option>
          <option>Good</option>
          <option>Used</option>
        </select>

        <select className="filter-select" value={sortBy}
        onChange={(e)=>setsortBy(e.target.value)}>
          <option>Newest</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
            
        </div>
        <div className="product-grid">
       </div>

       <div className="product-grid">

<div className="product-grid">

  <div className="product-grid">
  {filteredProducts.length > 0 ? (
    sortedProducts.map((product) => (
      <ProductCard
        key={product.id}
        title={product.title}
        category={product.category}
        condition={product.condition}
        price={product.price}
        seller={product.seller}
        location={product.location}
        image={product.image}
      />
    ))
  ) : (
    <p>No products found.</p>
  )}
</div>


</div>

</div>
    </div>
  );
};

export default Marketplace;