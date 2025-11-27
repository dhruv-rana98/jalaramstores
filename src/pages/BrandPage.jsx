import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';
import brands from '../data/brands.json';
import '../styles/BrandPage.css';

export default function BrandPage() {
    const { slug } = useParams();
    const brand = brands.find(b => b.slug === slug);
    const brandProducts = products.filter(p => p.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);

    if (!brand) {
        return (
            <div className="brand-not-found">
                <h2>Brand not found</h2>
                <Link to="/">← Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="brand-page">
            <div className="brand-header">
                <img src={brand.image} alt={brand.name} className="brand-banner" />
                <h1>{brand.name}</h1>
            </div>

            <div className="brand-content">
                <div className="breadcrumb">
                    <Link to="/">Home</Link> / <Link to="/brands">Brands</Link> / <span>{brand.name}</span>
                </div>

                {brandProducts.length > 0 ? (
                    <>
                        <p className="product-count">Showing {brandProducts.length} products</p>
                        <div className="products-grid">
                            {brandProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="no-products">
                        <p>No products found for this brand.</p>
                        <Link to="/" className="back-button">← Back to Home</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
