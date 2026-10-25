import Reveal from "../Reveal";

const milestones = [
  {
    phase: "PHASE 01 // FOUNDATION",
    period: "2022 — 2023",
    title: "Modern frontend & state orchestration",
    description: "Built a foundation in reactive programming, TypeScript, and predictable state management with Redux Toolkit and React Navigation. Focused on reusable UI primitives and accessible ergonomics.",
    skills: ["TypeScript", "Redux Toolkit", "REST APIs"],
  },
  {
    phase: "PHASE 02 // MOBILE ARCHITECTURE",
    period: "2023 — 2024",
    title: "Deep mobile architecture & offline systems",
    description: "Moved into cross-platform development, building offline-first caching, optimistic updates, notification pipelines, and secure API flows for mobile products.",
    skills: ["React Native", "Offline storage", "Push notifications"],
  },
  {
    phase: "PHASE 03 // NATIVE INTEGRATIONS",
    period: "CURRENT",
    title: "Fabric, TurboModules & high-fidelity interaction",
    description: "Working across native Swift and Kotlin integrations, device capabilities, and gesture systems designed to stay responsive on the UI thread.",
    skills: ["New Architecture", "Swift / Kotlin", "Reanimated"],
  },
];

export default function JourneySection() {
  return (
    <section className="section container section-bordered" id="journey" aria-labelledby="journey-title">
      <div className="journey-layout">
        <Reveal className="section-intro">
          <span className="section-kicker">01 / EVOLUTION</span>
          <h2 className="section-title" id="journey-title">The journey so far.</h2>
          <p>From foundational JavaScript interfaces to considered React Native apps that run smoothly across iOS and Android.</p>
          <p>I focus on native architecture, clear boundaries between threads, and reusable systems that let teams move quickly without losing the details.</p>
          <div className="stats-row">
            <div className="stat"><strong>2+</strong><span>Years building</span></div>
            <div className="stat"><strong>10+</strong><span>Shipped apps</span></div>
            <div className="stat"><strong>∞</strong><span>Still exploring</span></div>
          </div>
        </Reveal>
        <div className="timeline">
          {milestones.map((item, index) => (
            <Reveal className="timeline-item" key={item.phase} delay={index * 100}>
              <span className={`timeline-marker ${index === milestones.length - 1 ? "timeline-marker-current" : ""}`} />
              <article className="timeline-card">
                <div className="timeline-meta"><span>{item.phase}</span><time>{item.period}</time></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">{item.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
