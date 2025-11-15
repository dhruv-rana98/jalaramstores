import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import categories from '../data/categories.json';
import '../styles/CategoriesPage.css';

export default function CategoriesPage() {
  return (
    <div className="categories-page">
      <div className="page-header">
        <h1>All Categories</h1>
        <p>Browse our complete selection of Indian groceries and products</p>
      </div>

      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Categories</span>
      </div>

      <div className="categories-grid-full">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
