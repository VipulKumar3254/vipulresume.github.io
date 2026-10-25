"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["Work", "#work"],
  ["Journey", "#journey"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          <span className="status-dot" />
          <span className="wordmark-name">VIPUL</span>
          <span className="wordmark-role">/ React Native</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <span className="availability"><span className="status-dot" />Open for select contracts</span>
          <ThemeToggle />
          <button
            className="icon-button menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {links.map(([label, href], index) => (
          <a href={href} key={href} onClick={closeMenu} style={{ "--item-index": index }} tabIndex={menuOpen ? 0 : -1}>
            <span className="mono-label">0{index + 1}</span>{label}
          </a>
        ))}
        <span className="mobile-nav-note">VIPUL — REACT NATIVE / 2025</span>
      </nav>
    </header>
  );
}
