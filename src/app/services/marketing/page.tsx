import Link from "next/link";

export const metadata = {
  title: "Marketing Services | Mesisem Global LLC",
  description: "Branding, campaigns, and social media strategy for global markets.",
};

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding">
          <Link href="/services/" className="text-metallic-mid hover:text-metallic-light text-sm mb-6 inline-block">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Marketing
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl">
            Brand development, campaign execution, and social media strategy for global enterprise reach.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Branding",
                description: "Brand identity, visual systems, messaging frameworks, and brand governance.",
              },
              {
                title: "Campaigns",
                description: "Multi-channel campaign design, execution, and performance optimization.",
              },
              {
                title: "Social Media",
                description: "Platform strategy, content calendars, community management, and paid social.",
              },
              {
                title: "Content Strategy",
                description: "Content planning, SEO, copywriting, and editorial calendar management.",
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
