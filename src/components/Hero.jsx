import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Welcome to Jalaram Grocerry</h2>
        <p>Fresh Indian Groceries & Authentic Ingredients</p>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🌾</span>
            <h3>Farm Fresh</h3>
            <p>Quality from farm to table</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🚚</span>
            <h3>Free Delivery</h3>
            <p>On orders over £58</p>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <h3>Quick Checkout</h3>
            <p>Fast and secure shopping</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💬</span>
            <h3>Support</h3>
            <p>24/7 customer support</p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop" alt="Fresh produce" />
      </div>
    </section>
  );
}
