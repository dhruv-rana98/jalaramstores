import { Link } from 'react-router-dom';
import '../styles/BrandCard.css';

export default function BrandCard({ brand }) {
  return (
    <Link to={`/brand/${brand.slug}`} className="brand-card">
      <img src={brand.image} alt={brand.name} className="brand-image" />
      <h3 className="brand-name">{brand.name}</h3>
    </Link>
  );
}
