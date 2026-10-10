import Link from "next/link";

export const metadata = {
  title: "Technology Services | Mesisem Global LLC",
  description: "SaaS platforms, automation systems, and API architectures designed for scale.",
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding">
          <Link href="/services/" className="text-metallic-mid hover:text-metallic-light text-sm mb-6 inline-block">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Technology
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl">
            Cloud-native platforms, automation pipelines, and API ecosystems built for enterprise scale.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "SaaS Development",
                description: "End-to-end SaaS product design, development, and deployment with multi-tenant architecture.",
              },
              {
                title: "Automation",
                description: "Workflow automation, CI/CD pipelines, and DevOps transformation for operational efficiency.",
              },
              {
                title: "API Systems",
                description: "RESTful and GraphQL API design, microservices architecture, and integration middleware.",
              },
              {
                title: "Cloud Architecture",
                description: "AWS, Azure, and GCP infrastructure design with cost optimization and security controls.",
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
