"use client";

import { useEffect, useRef, useState } from "react";

const paragraphs = [
  <>My journey began with five years of academic learning at DCRUST University, where I built a strong technical foundation.</>,
  <>During this time, I developed an interest in software development and modern application technologies. I focused on strengthening my programming skills and problem-solving abilities. After completing my studies, I joined Thinking Unit for a six-month internship. There, I gained practical experience working on real-world software projects, building application features, and collaborating within a development team.</>,
  <>The internship helped me understand professional workflows and industry practices. Building on this experience, I moved forward in my software development career. Currently, I work as a Software Engineer at ATTABOT SOFTWARE, where I continue to develop scalable mobile applications and grow as an engineer.</>,
];

export default function JourneyStory() {
  const storyRef = useRef(null);
  const wasVisible = useRef(false);
  const [activeParagraph, setActiveParagraph] = useState(0);

  useEffect(() => {
    const story = storyRef.current;
    if (!story || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !wasVisible.current) {
        setActiveParagraph(0);
      }
      wasVisible.current = entry.isIntersecting;
    }, { threshold: 0.1 });

    observer.observe(story);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="journey-story" ref={storyRef}>
      {paragraphs.map((paragraph, index) => (
        <p
          className={`journey-story-paragraph ${activeParagraph === index ? "journey-story-active" : ""}`}
          key={index}
          onMouseEnter={() => setActiveParagraph(index)}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
