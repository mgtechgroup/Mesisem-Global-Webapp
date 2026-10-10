import Link from "next/link";
import ScrollAnimate from "@/modules/core/components/ScrollAnimate";
import GlassCard from "@/modules/core/components/GlassCard";

const services = [
  {
    title: "Consulting",
    description: "Business strategy, market research, operations, and management consulting.",
    href: "/services/consulting/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Technology",
    description: "SaaS platforms, automation systems, and API architectures.",
    href: "/services/technology/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    description: "Risk management, compliance support, and data security frameworks.",
    href: "/services/cybersecurity/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Analytics",
    description: "Dashboards, business intelligence, and automated reporting.",
    href: "/services/analytics/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    description: "Branding, campaigns, and social media strategy.",
    href: "/services/marketing/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Media",
    description: "Music, film, content production, and artist management.",
    href: "/services/media/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Ventures",
    description: "Incubation, equity development, and startup scaling.",
    href: "/services/ventures/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-steel/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-metallic-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-[30px] animate-fade-in-up">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-metallic-light mb-4">
            Service Verticals
          </h2>
          <p className="text-metallic-mid text-lg max-w-2xl mx-auto">
            Seven integrated service lines delivering comprehensive enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollAnimate key={index} delay={index * 0.08}>
              <Link href={service.href} className="block h-full">
                <GlassCard className="h-full p-6 group">
                  <div className="text-metallic-mid group-hover:text-metallic-light transition-colors mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-metallic-light font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-metallic-mid text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-metallic-dark group-hover:text-metallic-mid transition-colors text-sm font-medium">
                    Learn more →
                  </span>
                </GlassCard>
              </Link>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
