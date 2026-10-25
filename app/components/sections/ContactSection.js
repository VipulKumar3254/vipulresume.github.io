"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getFirebaseServices } from "../../firebase";
import Reveal from "../Reveal";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Quietly discard automated form fills while returning a normal-looking result.
    if (formData.get("companyWebsite")) {
      form.reset();
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setErrorMessage("");
    try {
      const { db } = getFirebaseServices();
      await addDoc(collection(db, "contactMessages"), {
        name: String(formData.get("name") ?? "").trim().slice(0, 100),
        email: String(formData.get("email") ?? "").trim().slice(0, 254),
        message: String(formData.get("message") ?? "").trim().slice(0, 5000),
        createdAt: serverTimestamp(),
        source: "portfolio-contact",
      });
      form.reset();
      setStatus("sent");
    } catch (error) {
      const errorCode = error?.code;
      setErrorMessage(
        errorCode === "permission-denied"
          ? "Firestore blocked this message. Confirm that the contact form rules are deployed to the configured Firebase project."
          : error?.message?.startsWith("Firebase setup is incomplete") || error?.message?.startsWith("Firebase App Check")
            ? error.message
            : "The message could not be sent. Please email Vipul directly instead."
      );
      setStatus("error");
    }
  }

  return (
    <section className="section container section-bordered contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-layout">
        <Reveal className="section-intro contact-intro">
          <span className="section-kicker">04 / INITIATION</span>
          <h2 className="section-title" id="contact-title">Let’s build something useful.</h2>
          <p>I’m interested in thoughtful products, ambitious ideas, and opportunities to build useful experiences for iOS and Android.</p>
          <div className="contact-details">
            <div><span className="mono-label">DIRECT INQUIRY</span><a href="mailto:vipul.reactnative@gmail.com">vipul.reactnative@gmail.com</a></div>
            <div><span className="mono-label">AVAILABILITY</span><strong>Available for select engagements</strong></div>
            <div><span className="mono-label">RESPONSE TIME</span><span>Within one business day</span></div>
          </div>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="contact-company-website">Company website</label>
            <input id="contact-company-website" name="companyWebsite" tabIndex={-1} autoComplete="off" />
          </div>
          <label htmlFor="contact-name">YOUR NAME</label>
          <input id="contact-name" name="name" autoComplete="name" maxLength={100} placeholder="Your name" required />
          <label htmlFor="contact-email">EMAIL ADDRESS</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@company.com" required />
          <label htmlFor="contact-message">PROJECT BRIEF / TIMELINE</label>
          <textarea id="contact-message" name="message" maxLength={5000} placeholder="What are you building?" rows={4} required />
          <button className="button button-primary submit-button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending message…" : status === "sent" ? "Message sent" : "Send message"}<span aria-hidden="true">↗</span>
          </button>
          {status === "sent" && <p className="form-note form-success" role="status">Your message was saved. Thank you — Vipul will be in touch.</p>}
          {status === "error" && <p className="form-note form-error" role="alert">{errorMessage} <a href="mailto:vipul.reactnative@gmail.com">Email directly</a>.</p>}
        </Reveal>
      </div>
    </section>
  );
}
