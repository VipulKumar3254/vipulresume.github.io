"use client";

import { useState } from "react";
import Reveal from "../Reveal";

const categories = [
  {
    label: "01 / MOBILE RUNTIME",
    note: "Core engine",
    skills: [
      ["React Native", "Cross-platform app development with a focus on native rendering and maintainable product architecture."],
      ["TypeScript", "Typed component APIs, navigation models, and safer contracts between the app and its services."],
      ["JavaScript", "Modern JavaScript, async flows, event loops, and runtime performance fundamentals."],
    ],
  },
  {
    label: "02 / STATE & ARCHITECTURE",
    note: "Scalable data flow",
    skills: [
      ["Redux Toolkit", "Organized state, asynchronous workflows, and normalized data with Redux Toolkit and RTK Query."],
      ["React Navigation", "Nested navigation, deep links, and app flows shaped around real product needs."],
      ["Reusable architecture", "Reusable components, clear boundaries, and design tokens that support product iteration."],
    ],
  },
  {
    label: "03 / BACKEND & NETWORKING",
    note: "Data contracts",
    skills: [
      ["REST APIs", "Reliable request and response contracts with thoughtful failure and retry behavior."],
      ["Axios", "Request orchestration, cancellation, and authenticated API flows."],
      ["Authentication & security", "Secure sessions, biometric entry points, and careful storage of sensitive app state."],
      ["Notifications", "Push notification integration and the navigation flows behind notification entry points."],
    ],
  },
  {
    label: "04 / NATIVE PLATFORMS",
    note: "Hardware integration",
    skills: [
      ["Android / Kotlin", "Native Android integrations, permissions, platform APIs, and build configuration."],
      ["iOS / Swift", "Native iOS modules and integrations with Apple platform capabilities."],
      ["Native modules & bridges", "Bridging platform APIs into React Native with clear, efficient interfaces."],
    ],
  },
  {
    label: "05 / DEV & DELIVERY TOOLS",
    note: "Continuous quality",
    skills: [
      ["Git & GitHub", "Collaborative version control, code review, and steady delivery workflows."],
      ["Figma", "Translating design systems and interaction details into working interfaces."],
      ["Firebase", "Product infrastructure and observability integrations for mobile applications."],
      ["Postman", "API exploration, request collections, and contract checks during development."],
    ],
  },
];

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const description = selectedSkill?.description ?? "Select or focus a technology to see how it fits into my mobile work.";

  return (
    <section className="section container section-bordered" id="skills" aria-labelledby="skills-title">
      <div className="skills-layout">
        <Reveal className="section-intro skills-intro">
          <span className="section-kicker">03 / STACK &amp; CAPABILITIES</span>
          <h2 className="section-title" id="skills-title">Tools I build with.</h2>
          <p>I treat mobile applications as dependable systems. I choose tools for the work they make easier and the product experience they help deliver.</p>
          <div className="inspection-console" aria-live="polite">
            <div><span className="mono-label">INSPECTION CONSOLE</span><span className="live-indicator"><span className="status-dot" />LIVE</span></div>
            <p key={description}>{description}</p>
          </div>
        </Reveal>

        <div className="skill-groups">
          {categories.map((category, index) => (
            <Reveal className="skill-group" key={category.label} delay={index * 55}>
              <div className="skill-heading"><span>{category.label}</span><span>{category.note}</span></div>
              <div className="skill-chips">
                {category.skills.map(([name, detail]) => {
                  const active = selectedSkill?.name === name;
                  return (
                    <button
                      className={`skill-chip ${active ? "skill-chip-active" : ""}`}
                      key={name}
                      type="button"
                      aria-pressed={active}
                      onMouseEnter={() => setSelectedSkill({ name, description: detail })}
                      onFocus={() => setSelectedSkill({ name, description: detail })}
                      onClick={() => setSelectedSkill({ name, description: detail })}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
