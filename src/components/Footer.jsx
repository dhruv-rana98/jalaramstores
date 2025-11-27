import '../styles/Footer.css';

export default function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Jalaram Grocery</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Jalaram Grocery. All rights reserved.</p>
      </div>
    </footer>
  );
}
