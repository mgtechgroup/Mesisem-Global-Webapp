import Link from "next/link";

export const metadata = {
  title: "Consulting Services | Mesisem Global LLC",
  description: "Business strategy, market research, operations, and management consulting for global enterprises.",
};

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding">
          <Link href="/services/" className="text-metallic-mid hover:text-metallic-light text-sm mb-6 inline-block">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Consulting
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl">
            Strategic consulting for market entry, operational excellence, and sustainable growth across global markets.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Business Strategy",
                description: "Market analysis, competitive positioning, and growth roadmaps tailored to your industry and geography.",
              },
              {
                title: "Market Research",
                description: "Primary and secondary research, consumer insights, and regulatory landscape analysis.",
              },
              {
                title: "Operations",
                description: "Process optimization, supply chain design, and operational scalability frameworks.",
              },
              {
                title: "Management",
                description: "Leadership development, organizational design, and governance structures for Series LLCs.",
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
