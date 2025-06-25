
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h2>DreamHomes</h2>
          <p>Your trusted partner in real estate.</p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/listings">Listings</a></li>
            <li><a href="/agents">Agents</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact Us</h4>
          <p>123 Main Street, Los Angeles, CA</p>
          <p>Email: info@dreamhomes.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="footer__social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} DreamHomes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
