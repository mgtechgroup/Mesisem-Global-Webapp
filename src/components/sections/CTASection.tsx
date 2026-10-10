import ScrollAnimate from "@/modules/core/components/ScrollAnimate";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-steel relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199, 208, 216, 0.4) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/3 left-1/5 w-64 h-64 rounded-full bg-metallic-light/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-metallic-dark/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-4xl mx-auto section-padding text-center">
        <ScrollAnimate>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-metallic-light mb-6">
            Ready to Scale?
          </h2>
        </ScrollAnimate>

        <ScrollAnimate delay={0.2}>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re entering new markets, building secure systems, or scaling a venture — we provide the structured expertise to execute.
          </p>
        </ScrollAnimate>

        <ScrollAnimate delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact/"
              className="btn-primary text-base uppercase tracking-widest inline-block"
            >
              Schedule Consultation
            </a>
            <a
              href="/pricing/"
              className="btn-secondary text-base uppercase tracking-widest inline-block"
            >
              View Pricing
            </a>
          </div>
        </ScrollAnimate>

        <ScrollAnimate delay={0.6}>
          <p className="mt-8 text-metallic-dark text-sm">
            Consulting rate: $350/hour · Deposit: $150 · Minimum commitment: 3 months
          </p>
        </ScrollAnimate>
      </div>
    </section>
  );
}
