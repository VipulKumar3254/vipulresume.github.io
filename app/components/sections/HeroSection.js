import Image from "next/image";
import Reveal from "../Reveal";

export default function HeroSection() {
  return (
    <section className="hero section container" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Reveal className="eyebrow-pill">
          <span className="status-dot" />
          <span>React Native Mobile Developer</span>
          <span className="pill-divider">/</span>
          <strong>iOS &amp; Android</strong>
        </Reveal>
        <Reveal as="h1" className="hero-title" delay={100}>
          Building digital experiences that <em>feel as good</em> as they work.
        </Reveal>
        <Reveal as="p" className="hero-description" delay={180}>
          I craft high-performance React Native applications that bring together clean architecture, fluent native modules, and tactile product design.
        </Reveal>
        <Reveal className="hero-actions" delay={240}>
          <a className="button button-primary" href="#work">
            View my work <span className="arrow-down" aria-hidden="true">↘</span>
          </a>
          <div className="social-links" aria-label="Social profiles">
            <a className="icon-button" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub profile">GH</a>
            <a className="icon-button" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a>
          </div>
        </Reveal>
        <Reveal className="hero-metrics" delay={300}>
          <div><span className="mono-label">FRAME BUDGET</span><strong>60 / 120 FPS</strong></div>
          <div><span className="mono-label">ECOSYSTEM</span><strong>Fabric &amp; JSI</strong></div>
          <div><span className="mono-label">LOCATION</span><strong>San Francisco, CA</strong></div>
        </Reveal>
      </div>

      <Reveal className="hero-visual" delay={160}>
        <div className="portrait-frame">
          <div className="portrait-image-wrap">
            <Image
              src="/images/vipul-portrait.jpg"
              alt="Vipul, React Native developer"
              fill
              priority
              sizes="(max-width: 760px) 88vw, (max-width: 1100px) 70vw, 42vw"
              className="portrait-image"
            />
            <div className="portrait-scrim" />
            <div className="portrait-caption">
              <div><span className="mono-label accent-label">ENGINE ARCHITECTURE</span><strong>React Native Fabric · TurboModules</strong></div>
              <div className="caption-status"><span className="mono-label">STABILITY</span><strong>PRODUCTION READY</strong></div>
            </div>
          </div>
          <div className="floating-note"><span className="status-dot" />2+ years mobile craft</div>
        </div>
      </Reveal>
    </section>
  );
}
