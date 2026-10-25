"use client";

import { useEffect, useState } from "react";
import { applyTheme } from "../colors";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("vipul-portfolio-theme");
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    window.localStorage.setItem("vipul-portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.2 15.2A8.7 8.7 0 0 1 8.8 3.8 8.8 8.8 0 1 0 20.2 15.2Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      )}
    </button>
  );
}
