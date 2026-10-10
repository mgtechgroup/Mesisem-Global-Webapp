import Link from "next/link";

export const metadata = {
  title: "Ventures | Mesisem Global LLC",
  description: "Incubation, equity development, and startup scaling with structured equity models.",
};

export default function VenturesPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding">
          <Link href="/services/" className="text-metallic-mid hover:text-metallic-light text-sm mb-6 inline-block">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Ventures
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl">
            Startup incubation, equity partnerships, and capital-efficient scaling with structured 30% equity model.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          {/* Venture Model */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {[
              { label: "Default Equity", value: "30%", detail: "Standard participation" },
              { label: "Vesting", value: "24 mo", detail: "Monthly vesting schedule" },
              { label: "Buyback", value: "36 mo", detail: "Allowed after 36 months" },
            ].map((stat, index) => (
              <div key={index} className="card-metallic text-center">
                <p className="text-metallic-light font-bold text-4xl mb-2">{stat.value}</p>
                <p className="text-metallic-mid font-medium mb-1">{stat.label}</p>
                <p className="text-metallic-dark text-sm">{stat.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Incubation",
                description: "Idea validation, MVP development, and go-to-market strategy for early-stage ventures.",
              },
              {
                title: "Equity Development",
                description: "Structured equity participation, cap table optimization, and investor relations.",
              },
              {
                title: "Startup Scaling",
                description: "Growth hacking, operational scaling, and Series A/B preparation.",
              },
              {
                title: "Portfolio Management",
                description: "Ongoing governance, reporting, and strategic advisory for portfolio companies.",
              },
            ].map((item, index) => (
              <div key={index} className="card-metallic">
                <h3 className="text-metallic-light font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-metallic-mid text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
