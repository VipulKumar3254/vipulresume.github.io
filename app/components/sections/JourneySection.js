import Reveal from "../Reveal";
import JourneyStory from "../JourneyStory";

const milestones = [
  {
    phase: "EDUCATION",
    period: "5 YEARS",
    title: "BCA & MCA — DCRUST University",
    description:
      "Pursued both degrees at Deenbandhu Chhotu Ram University of Science and Technology (DCRUST), Murthal, Sonipat. Built a strong academic foundation while developing technical knowledge, problem-solving abilities, and a passion for software development.",
    skills: ["BCA", "MCA", "DCRUST · Murthal"],
  },
  {
    phase: "CAREER 01 // THINKING UNIT",
    period: "6 MONTHS",
    title: "Software Engineer Intern",
    description:
      "Joined THINKING UNIT as a Software Engineer Intern and worked on software engineering core concepts. My major role was as React Native developer- building Mobile screens, integrating api and developing the seamless user experience.  ",
    skills: ["Internship", "Software Engineering"],
  },
  {
    phase: "CAREER 02 // ATTABOT SOFTWARE",
    period: "4 MONTHS · CURRENT",
    title: "Software Engineer",
    description:
      "Working as a Software Engineer at ATTABOT SOFTWARE, developing cross-platform mobile applications using React Native.Building reusable UI components and integrating REST APIs to deliver seamless user experiences.Managing application state, navigation, authentication, and push notifications.Debugging issues and optimizing application performance while maintaining clean, scalable code.",
    skills: ["Current role", "Software Engineering"],
  },
];

export default function JourneySection() {
  return (
    <section
      className="section container section-bordered"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="journey-layout">
        <Reveal className="section-intro">
          <span className="section-kicker">
            01 / EDUCATION &amp; EXPERIENCE
          </span>
          <h2 className="section-title" id="journey-title">
            The journey so far.
          </h2>
          <JourneyStory />
        </Reveal>
        <div className="timeline">
          {milestones.map((item, index) => (
            <Reveal
              className="timeline-item"
              key={item.phase}
              delay={index * 100}
            >
              <span
                className={`timeline-marker ${index === milestones.length - 1 ? "timeline-marker-current" : ""}`}
              />
              <article className="timeline-card">
                <div className="timeline-meta">
                  <span>{item.phase}</span>
                  <time>{item.period}</time>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">
                  {item.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
