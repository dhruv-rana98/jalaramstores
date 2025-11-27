import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import BrandCard from '../components/BrandCard';
import categories from '../data/categories.json';
import products from '../data/products.json';
import brands from '../data/brands.json';
import '../styles/Home.css';

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const featuredBrands = brands.slice(0, 6);

  return (
    <div className="home">
      <Hero />

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Shop Categories</h2>
          <a href="/categories" className="view-all">View All →</a>
        </div>
        <div className="categories-grid">
          {categories.slice(0, 8).map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="products-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <a href="/products" className="view-all">View All →</a>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="section-header">
          <h2>Shop By Brands</h2>
          <a href="/brands" className="view-all">View All →</a>
        </div>
        <div className="brands-grid">
          {featuredBrands.map(brand => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

    </div>
  );
}
