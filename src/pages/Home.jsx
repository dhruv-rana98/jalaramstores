import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import BrandCard from '../components/BrandCard';
import categories from '../data/categories.json';
import brands from '../data/brands.json';
import '../styles/Home.css';

export default function Home() {
  const featuredBrands = brands.slice(0, 6);

  return (
    <div className="home">
      <Hero />

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Shop Categories</h2>
          <Link to="/categories" className="view-all">View All →</Link>
        </div>
        <div className="categories-grid">
          {categories.slice(0, 8).map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>


      {/* Brands Section */}
      <section className="brands-section">
        <div className="section-header">
          <h2>Shop By Brands</h2>
          <Link to="/brands" className="view-all">View All →</Link>
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
