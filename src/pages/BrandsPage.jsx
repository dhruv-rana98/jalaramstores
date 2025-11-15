import { Link } from 'react-router-dom';
import BrandCard from '../components/BrandCard';
import brands from '../data/brands.json';
import '../styles/BrandsPage.css';

export default function BrandsPage() {
  return (
    <div className="brands-page">
      <div className="page-header">
        <h1>Shop By Brands</h1>
        <p>Discover quality products from trusted brands</p>
      </div>

      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Brands</span>
      </div>

      <div className="brands-grid-full">
        {brands.map(brand => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
}
