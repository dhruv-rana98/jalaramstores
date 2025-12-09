import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Jalaram Grocery</h1>
        </Link>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="header-right">
          {/* <span className="search-icon">🔍</span>

          <span className="account-icon">👤</span> */}
        </div>
      </div>
    </header>
  );
}
