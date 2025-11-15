import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';
import categories from '../data/categories.json';
import '../styles/CategoryPage.css';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => p.category === slug);

  if (!category) {
    return (
      <div className="category-not-found">
        <h2>Category not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="category-header">
        <img src={category.image} alt={category.name} className="category-banner" />
        <h1>{category.name}</h1>
      </div>

      <div className="category-content">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>{category.name}</span>
        </div>

        {categoryProducts.length > 0 ? (
          <>
            <p className="product-count">Showing {categoryProducts.length} products</p>
            <div className="products-grid">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="no-products">
            <p>No products found in this category.</p>
            <Link to="/" className="back-button">← Back to Home</Link>
          </div>
        )}
      </div>
    </div>
  );
}
