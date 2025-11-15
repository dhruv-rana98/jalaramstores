import { Link } from 'react-router-dom';
import '../styles/CategoryCard.css';

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.slug}`} className="category-card">
      <div className="category-image-container">
        <img src={category.image} alt={category.name} className="category-image" />
      </div>
      <h3 className="category-name">{category.name}</h3>
    </Link>
  );
}
