import ScrollAnimate from "@/modules/core/components/ScrollAnimate";
import GlassCard from "@/modules/core/components/GlassCard";

const differentiators = [
  {
    title: "Global Compliance",
    description: "Multi-jurisdictional regulatory expertise covering BSA, GDPR, CCPA, NIST CSF, and emerging frameworks.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity Integration",
    description: "Security-by-design methodology with NIST CSF alignment, continuous monitoring, and compliance automation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Equity-Based Growth Model",
    description: "30% default equity participation, 24-month vesting, and 36-month buyback options for venture partners.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Differentiators() {
  return (
    <section className="py-20 lg:py-28 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-metallic-mid/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-[30px] animate-fade-in-up">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-metallic-light mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-metallic-mid text-lg max-w-2xl mx-auto">
            Three core differentiators that define the Mesisem Global approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <ScrollAnimate key={index} delay={index * 0.15}>
              <GlassCard className="relative p-8 h-full">
                <div className="absolute -top-4 left-8 px-4 py-1 bg-steel border border-metallic-dark/30 rounded text-metallic-light text-sm font-mono backdrop-blur-xl">
                  0{index + 1}
                </div>
                <div className="text-metallic-mid mb-4 mt-2">
                  {item.icon}
                </div>
                <h3 className="text-metallic-light font-semibold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-metallic-mid text-sm leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
