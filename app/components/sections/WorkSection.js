import Image from "next/image";
import Reveal from "../Reveal";

function ProjectImage({ src, alt, badge, badgePosition = "top-left" }) {
  return (
    <div className="project-image">
      <Image src={src} alt={alt} fill sizes="(max-width: 760px) 88vw, 58vw" />
      <span className={`image-badge ${badgePosition}`}>{badge}</span>
    </div>
  );
}

function ProjectTags({ items }) {
  return <div className="tag-list">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>;
}

export default function WorkSection() {
  return (
    <section className="section container section-bordered" id="work" aria-labelledby="work-title">
      <Reveal className="section-heading-row">
        <div><span className="section-kicker">02 / PORTFOLIO GALLERY</span><h2 className="section-title" id="work-title">Selected work.</h2></div>
        <p className="mono-copy">Built for responsive touch, production resilience, and a little delight.</p>
      </Reveal>

      <Reveal as="article" className="project-card project-featured">
        <div className="project-grid">
          <ProjectImage src="/images/aura-vault.jpg" alt="Aura Vault fintech mobile application interface" badge="LIVE WEBSOCKET · 60 FPS" />
          <div className="project-copy">
            <div className="project-meta"><span>PROJECT 01 // FINTECH</span><span>2024 RELEASE</span></div>
            <h3>Aura Vault — High-Frequency Wealth Engine</h3>
            <p>Real-time portfolio and order book experiences powered by custom native bridges that keep WebSocket work off the JavaScript runtime.</p>
            <div className="project-facts"><div><span>ROLE</span><strong>Lead Mobile Architect</strong></div><div><span>PLATFORM</span><strong>iOS &amp; Android</strong></div></div>
            <ProjectTags items={["React Native 0.74", "Redux Toolkit", "TurboModules", "Biometrics"]} />
            <a className="text-link" href="#contact">View architecture specs <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </Reveal>

      <Reveal as="article" className="project-card project-card-offset">
        <div className="project-grid">
          <div className="project-copy">
            <div className="project-meta"><span>PROJECT 02 // CREATIVE AUDIO</span><span>2024 RELEASE</span></div>
            <h3>Sonance Labs — Spatial Synthesizer &amp; LFO</h3>
            <p>A tactile mobile synthesizer with fluid sliders, real-time waveforms, and haptic feedback mapped to native audio threads.</p>
            <div className="project-facts"><div><span>LATENCY</span><strong>&lt; 4ms input lag</strong></div><div><span>GESTURES</span><strong>Reanimated physics</strong></div></div>
            <ProjectTags items={["Expo SDK 51", "Reanimated", "Audio JSI", "Haptics"]} />
            <a className="text-link" href="#contact">Explore interaction <span aria-hidden="true">↗</span></a>
          </div>
          <ProjectImage src="/images/sonance-labs.jpg" alt="Sonance Labs spatial synthesizer mobile interface" badge="DSP THREAD LINKED" badgePosition="bottom-right" />
        </div>
      </Reveal>

      <Reveal as="article" className="project-card project-engine">
        <div className="engine-copy">
          <div className="project-meta"><span className="open-source-label">OPEN SOURCE ENGINE</span><span>PROJECT 03 // ARCHITECTURE</span></div>
          <h3>Kinesis — Kinetic Component Engine for React Native</h3>
          <p>A component system for physics-driven gestures, spring sheets, and fluid navigation built with Reanimated and Gesture Handler.</p>
          <ProjectTags items={["NativeWind", "Gesture Handler", "Component Kit"]} />
        </div>
        <a className="button button-secondary" href="https://github.com" target="_blank" rel="noreferrer">View source code <span aria-hidden="true">↗</span></a>
      </Reveal>
    </section>
  );
}
