import './footer.css'
export default function Footer() {
    const quickLinks = [
      { title: "About Us", url: "#" },
      { title: "Blog", url: "#" },
      { title: "Careers", url: "#" },
      { title: "Support", url: "#" }
    ];
  
    const socialMedia = [
      { name: "Twitter", url: "#", icon: "🐦" },
      { name: "Facebook", url: "#", icon: "📘" },
      { name: "Instagram", url: "#", icon: "📸" }
    ];
  
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company</h4>
            <p>Making the world a better place through innovative solutions.</p>
          </div>
  
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
  
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              {socialMedia.map((social, index) => (
                <a key={index} href={social.url} aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
  
        <div className="copyright">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    );
  }