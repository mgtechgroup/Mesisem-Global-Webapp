import Link from "next/link";

const services = [
  {
    title: "Consulting",
    description: "Business strategy, market research, operations, and management consulting for global enterprises.",
    href: "/services/consulting/",
    features: ["Business Strategy", "Market Research", "Operations", "Management"],
  },
  {
    title: "Technology",
    description: "SaaS platforms, automation systems, and API architectures designed for scale.",
    href: "/services/technology/",
    features: ["SaaS Development", "Automation", "API Systems", "Cloud Architecture"],
  },
  {
    title: "Cybersecurity",
    description: "Risk management, compliance support, and data security frameworks aligned with NIST CSF.",
    href: "/services/cybersecurity/",
    features: ["Risk Management", "Compliance Support", "Data Security", "Penetration Testing"],
  },
  {
    title: "Analytics",
    description: "Dashboards, business intelligence, and automated reporting systems.",
    href: "/services/analytics/",
    features: ["Dashboards", "Business Intelligence", "Reporting", "Data Visualization"],
  },
  {
    title: "Marketing",
    description: "Branding, campaigns, and social media strategy for global markets.",
    href: "/services/marketing/",
    features: ["Branding", "Campaigns", "Social Media", "Content Strategy"],
  },
  {
    title: "Media",
    description: "Music, film, content production, and artist management.",
    href: "/services/media/",
    features: ["Music Production", "Film", "Content", "Artist Management"],
  },
  {
    title: "Ventures",
    description: "Incubation, equity development, and startup scaling with structured equity models.",
    href: "/services/ventures/",
    features: ["Incubation", "Equity Development", "Startup Scaling", "Portfolio Management"],
  },
];

export const metadata = {
  title: "Services | Mesisem Global LLC",
  description: "Seven integrated service verticals: Consulting, Technology, Cybersecurity, Analytics, Marketing, Media, and Ventures.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Service Verticals
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl mx-auto">
            Seven integrated service lines delivering comprehensive enterprise solutions across consulting, technology, media, and venture development.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-8 border border-metallic-dark/30 rounded-lg bg-steel/20 hover:bg-steel/40 transition-all duration-300 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-metallic-light font-semibold text-2xl group-hover:text-white transition-colors">
                    {service.title}
                  </h2>
                  <span className="text-metallic-dark group-hover:text-metallic-mid transition-colors text-sm">
                    →
                  </span>
                </div>
                <p className="text-metallic-mid text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 bg-metallic-dark/20 text-metallic-mid text-xs rounded-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
