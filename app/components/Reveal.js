"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div", ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      // Toggle visibility both ways so the reveal animation can replay when
      // the visitor scrolls back to this section.
      setVisible(entry.isIntersecting);
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      {...props}
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ ...props.style, "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
