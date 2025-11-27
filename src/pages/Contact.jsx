import { Link } from 'react-router-dom';
import '../styles/Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with our team!</p>
      </div>

      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Contact</span>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <section className="info-section">
            <h3>📍 Address</h3>
            <p>24, Peterborough Road<br />HA1 2BQ<br />United Kingdom</p>
          </section>

          <section className="info-section">
            <h3>📞 Phone</h3>
            <p>020 3581 8072</p>
          </section>

          <section className="info-section">
            <h3>✉️ Email</h3>
            <p><a href="mailto:jalaram.groceryltd@gmail.com">jalaram.groceryltd@gmail.com</a></p>
          </section>

          <section className="info-section">
            <h3>🕐 Hours</h3>
            <p>Monday - Saturday: 08:00-22:00<br />Sunday: 09:00-20:00</p>
          </section>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}
