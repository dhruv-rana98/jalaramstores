import '../styles/ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.offer && (
          <div className="offer-badge">
            {product.offer.discountPercent}% OFF
          </div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        <p className="product-size">{product.size}</p>
        <p className="product-description">{product.description}</p>
      </div>
      <div className="product-footer">
        <div className="product-price">
          {product.offer ? (
            <>
              <span className="current-price">£{product.price.toFixed(2)}</span>
              <span className="original-price">£{product.offer.originalPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="current-price">£{product.price.toFixed(2)}</span>
          )}
        </div>

      </div>
    </div>
  );
}
