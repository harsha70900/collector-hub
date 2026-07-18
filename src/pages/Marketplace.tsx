const Marketplace = () => {
  return (
    <div className="page">
      <h1 className="page-title">Marketplace</h1>

       <div className="marketplace-controls">
        <input type="text" placeholder="Search collectibles..." className="search-input" />

        <select className="filter-select">
          <option>All Categories</option>
          <option>Trading Cards</option>
          <option>Coins</option>
          <option>Comics</option>
          <option>Figures</option>
        </select>

        <select className="filter-select">
          <option>All Conditions</option>
          <option>Mint</option>
          <option>Good</option>
          <option>Used</option>
        </select>

        <select className="filter-select">
          <option>Newest</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
            
        </div>
        <div className="product-grid">
       </div>
    </div>
  );
};

export default Marketplace;