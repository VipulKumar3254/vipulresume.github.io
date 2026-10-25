export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <div className="footer-brand-line"><span className="status-dot" /><strong>VIPUL</strong><span>/ React Native Developer</span></div>
          <p>Designed with curiosity. Built with code.</p>
        </div>
        <nav className="footer-links" aria-label="Social links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:vipul.reactnative@gmail.com">Email ↗</a>
        </nav>
        <div className="footer-note"><span>© {new Date().getFullYear()} Vipul</span><span>Built for mobile craft</span></div>
      </div>
    </footer>
  );
}
