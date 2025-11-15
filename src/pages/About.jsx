import { Link } from 'react-router-dom';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Jalaram Grocerry</h1>
        <p>Your trusted source for authentic Indian groceries</p>
      </div>

      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>About</span>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Jalaram Grocerry is dedicated to bringing authentic Indian groceries and ingredients 
            directly to your doorstep. With a commitment to quality and freshness, we source our 
            products from trusted suppliers and farms across India.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We aim to make genuine Indian ingredients accessible to everyone, preserving the 
            authenticity of Indian cuisine while ensuring the highest standards of quality and hygiene.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="features-list">
            <li>✓ Fresh products sourced directly from farms</li>
            <li>✓ Authentic Indian ingredients and brands</li>
            <li>✓ Free delivery on orders over £58</li>
            <li>✓ Quick and secure checkout</li>
            <li>✓ 24/7 customer support</li>
            <li>✓ Quality guarantee on all products</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Get in Touch</h2>
          <p>Have questions? We'd love to hear from you!</p>
          <Link to="/contact" className="contact-link">Contact Us</Link>
        </section>
      </div>
    </div>
  );
}
