import ScrollAnimate from "@/modules/core/components/ScrollAnimate";
import GlassCard from "@/modules/core/components/GlassCard";

const pillars = [
  {
    title: "Market Entry Execution",
    description: "Strategic market analysis, regulatory navigation, and rapid deployment frameworks for global expansion.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Scalable Systems",
    description: "Cloud-native architecture, automation pipelines, and API ecosystems designed for exponential growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Secure Operations",
    description: "NIST-aligned cybersecurity, compliance automation, and risk management across all jurisdictions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Venture Development",
    description: "Startup incubation, equity partnerships, and capital-efficient scaling with 30% default equity model.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ValuePillars() {
  return (
    <section className="py-20 lg:py-28 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-metallic-dark/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-[30px] animate-fade-in-up">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-metallic-light mb-4">
            Core Value Pillars
          </h2>
          <p className="text-metallic-mid text-lg max-w-2xl mx-auto">
            Four strategic pillars that define our approach to global enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <ScrollAnimate key={index} delay={index * 0.1}>
              <GlassCard className="h-full p-8">
                <div className="text-metallic-mid group-hover:text-metallic-light transition-colors mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-metallic-light font-semibold text-lg mb-3">
                  {pillar.title}
                </h3>
                <p className="text-metallic-mid text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </GlassCard>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
