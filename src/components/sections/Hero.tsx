import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-steel">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 208, 216, 0.4) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-metallic-light/5 blur-3xl animate-float"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-metallic-dark/10 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Globe Grid SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-[900px] h-[900px] animate-spin-slow">
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 200 200)" />
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(90 200 200)" />
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(135 200 200)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto section-padding text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center animate-fade-in-up">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image
              src="/assets/logo/mesisem-logo-final.png"
              alt="Mesisem Global LLC"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-metallic-light mb-6 leading-tight animate-fade-in-up stagger-2">
          Global Enterprise
          <br />
          <span className="text-metallic-mid">Solutions</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-metallic-mid max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up stagger-3">
          Scalable systems. Secure operations. Venture-backed growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-4">
          <Link
            href="/contact/"
            className="btn-primary text-base uppercase tracking-widest"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/services/"
            className="btn-secondary text-base uppercase tracking-widest"
          >
            Explore Services
          </Link>
        </div>

        {/* Entity Info */}
        <p className="mt-8 text-metallic-dark text-sm animate-fade-in-up stagger-5">
          Delaware Series LLC | EIN 39-2830581
        </p>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
