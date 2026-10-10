"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? `HTTP ${res.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      setError((err as Error).message || "Submission failed. Please retry.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <h2 className="text-metallic-light font-semibold text-2xl mb-6 uppercase tracking-wider">
        Schedule Consultation
      </h2>
      {submitted ? (
        <div className="card-metallic text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-metallic-dark/30 flex items-center justify-center">
            <svg className="w-8 h-8 text-metallic-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-metallic-light font-semibold text-xl mb-2">Message Received</h3>
          <p className="text-metallic-mid text-sm">We&apos;ll respond within 2 business days.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-metallic-mid text-sm mb-2">Full Name *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-steel/30 border border-metallic-dark/30 rounded-sm text-metallic-light placeholder-metallic-dark focus:outline-none focus:border-metallic-mid transition-colors"
              placeholder="Your name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-metallic-mid text-sm mb-2">Email *</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-steel/30 border border-metallic-dark/30 rounded-sm text-metallic-light placeholder-metallic-dark focus:outline-none focus:border-metallic-mid transition-colors"
              placeholder="you@company.com"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-metallic-mid text-sm mb-2">Company</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-steel/30 border border-metallic-dark/30 rounded-sm text-metallic-light placeholder-metallic-dark focus:outline-none focus:border-metallic-mid transition-colors"
              placeholder="Your company"
              value={formState.company}
              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-metallic-mid text-sm mb-2">Service Interest</label>
            <select
              className="w-full px-4 py-3 bg-steel/30 border border-metallic-dark/30 rounded-sm text-metallic-light focus:outline-none focus:border-metallic-mid transition-colors"
              value={formState.service}
              onChange={(e) => setFormState({ ...formState, service: e.target.value })}
            >
              <option value="" className="bg-steel">Select a service</option>
              <option value="consulting" className="bg-steel">Consulting</option>
              <option value="technology" className="bg-steel">Technology</option>
              <option value="cybersecurity" className="bg-steel">Cybersecurity</option>
              <option value="analytics" className="bg-steel">Analytics</option>
              <option value="marketing" className="bg-steel">Marketing</option>
              <option value="media" className="bg-steel">Media</option>
              <option value="ventures" className="bg-steel">Ventures</option>
            </select>
          </div>
          <div>
            <label className="block text-metallic-mid text-sm mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-steel/30 border border-metallic-dark/30 rounded-sm text-metallic-light placeholder-metallic-dark focus:outline-none focus:border-metallic-mid transition-colors resize-none"
              placeholder="Tell us about your project..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            />
          </div>
          <button type="submit" disabled={sending} className="btn-primary w-full uppercase tracking-wider disabled:opacity-60">
            {sending ? "Sending…" : "Submit Inquiry"}
          </button>
          {error && <p className="text-red-400 text-xs text-center">{error}</p>}
          <p className="text-metallic-dark text-xs text-center">
            By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      )}
    </>
  );
}
