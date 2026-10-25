import Image from "next/image";
import Reveal from "../Reveal";

function ProjectVisual({ src, alt, badge, badgePosition = "top-left", art }) {
  return (
    <div
      className={`project-image ${src ? "project-image-landscape" : "project-image-art"}`}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : alt}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 760px) 88vw, 48vw" />
      ) : (
        <ProjectArtwork variant={art} />
      )}
      <span className={`image-badge ${badgePosition}`}>{badge}</span>
    </div>
  );
}

function ProjectArtwork({ variant }) {
  if (variant === "audit") {
    return (
      <div className="project-art audit-art" aria-hidden="true">
        <div className="art-topline"><strong>AIRA<span>OPS</span></strong><span>PRODUCT AUDIT</span></div>
        <div className="art-scan"><span className="scan-mark">⌗</span><span>Scan a product barcode</span><span>↗</span></div>
        <div className="art-report">
          <div className="art-report-heading"><span>PRODUCT REPORT</span><span className="art-status">READY</span></div>
          <div className="art-product-row"><span className="art-product-icon">P</span><span><strong>Product details</strong><small>Captured for audit</small></span><span>✓</span></div>
          <div className="art-report-lines"><i /><i /><i /></div>
          <div className="art-report-footer"><span>Audit summary</span><b>View report&nbsp; ↗</b></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-art grievance-art" aria-hidden="true">
      <div className="art-topline"><strong>GRIEVANCE<span>DESK</span></strong><span>CASE MANAGEMENT</span></div>
      <div className="art-greeting"><span>MY REQUESTS</span><strong>How can we help?</strong></div>
      <div className="art-ticket"><span className="ticket-icon">＋</span><span><strong>Submit a grievance</strong><small>Tell us what happened</small></span><b>↗</b></div>
      <div className="art-ticket"><span className="ticket-icon ticket-icon-progress">◷</span><span><strong>Request #2048</strong><small>Assigned to a resolution team</small></span><b className="ticket-status">IN REVIEW</b></div>
      <div className="art-steps"><i className="step-done" /><i className="step-active" /><i /><span>Submitted&nbsp;&nbsp;&nbsp;&nbsp; In review&nbsp;&nbsp;&nbsp;&nbsp; Resolved</span></div>
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
        <p className="mono-copy">Mobile products built for real retail and service workflows.</p>
      </Reveal>

      <Reveal as="article" className="project-card project-featured">
        <div className="project-grid">
          <ProjectVisual art="audit" alt="Illustration of a product audit report in the AIRAops ecosystem" badge="AIRAOPS ECOSYSTEM" />
          <div className="project-copy">
            <div className="project-meta"><span>PROJECT 01 // RETAIL AUDIT</span><span>MOBILE APP</span></div>
            <h3>Product App</h3>
            <p>A product-auditing app built to plug into the AIRAops ecosystem. Retail teams scan products and use the app to create audit reports.</p>
            <div className="project-facts"><div><span>ROLE</span><strong>React Native Developer</strong></div><div><span>WORK</span><strong>UI, functionality &amp; APIs</strong></div></div>
            <ProjectTags items={["React Native", "JavaScript / TypeScript", "REST APIs", "Reusable UI", "Redux where applicable"]} />
          </div>
        </div>
      </Reveal>

      <Reveal as="article" className="project-card project-card-offset">
        <div className="project-grid">
          <div className="project-copy">
            <div className="project-meta"><span>PROJECT 02 // RETAIL INVENTORY</span><span>ANDROID APP</span></div>
            <h3>StockSure</h3>
            <p>A stock and shelf-counting application designed to support inventory tracking and retail stock-management workflows.</p>
            <div className="project-facts"><div><span>ROLE</span><strong>React Native Developer</strong></div><div><span>FOCUS</span><strong>Mobile UI &amp; app functionality</strong></div></div>
            <ProjectTags items={["React Native", "JavaScript / TypeScript", "REST APIs", "Android integrations"]} />
            <a className="text-link" href="https://play.google.com/store/search?q=stocksure&c=apps&hl=en_IN" target="_blank" rel="noreferrer">Find StockSure on Google Play <span aria-hidden="true">↗</span></a>
          </div>
          <ProjectVisual src="/images/stocksure.webp" alt="StockSure retail shelf-audit app shown on a phone" badge="STOCK & SHELF COUNTING" badgePosition="bottom-right" />
        </div>
      </Reveal>

      <Reveal as="article" className="project-card project-featured project-last">
        <div className="project-grid">
          <ProjectVisual art="grievance" alt="Illustration of grievance submission and status tracking" badge="COMPLAINT WORKFLOWS" />
          <div className="project-copy">
            <div className="project-meta"><span>PROJECT 03 // SERVICE WORKFLOWS</span><span>REUSABLE MODULES</span></div>
            <h3>Aira Grievance Management App</h3>
            <p>A complaint-management app for submitting grievances, tracking complaint status, and moving cases through resolution workflows.</p>
            <div className="project-facts"><div><span>ROLE</span><strong>React Native Developer</strong></div><div><span>WORK</span><strong>Architecture, forms &amp; integrations</strong></div></div>
            <ProjectTags items={["React Native", "React Redux", "Redux Persist", "React Navigation", "Axios", "FCM & Notifee", "AsyncStorage"]} />
            <p className="project-detail">Dynamic forms, search and filtering, authentication, push notifications, and notification-based navigation.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
