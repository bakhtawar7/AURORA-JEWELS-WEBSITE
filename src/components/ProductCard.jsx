function ProductCard({ image, name, price }) {
  return (
    <div className="col-6 col-md-3 mb-4">
      <div className="product-card">
        <div className="product-img-wrap">
          <img src={image} alt={name} className="product-img" />
        </div>
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
          <button className="btn btn-add-cart w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
