import Link from "next/link";

export const metadata = {
  title: "Cybersecurity Services | Mesisem Global LLC",
  description: "Risk management, compliance support, and data security frameworks aligned with NIST CSF.",
};

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding">
          <Link href="/services/" className="text-metallic-mid hover:text-metallic-light text-sm mb-6 inline-block">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Cybersecurity
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl">
            NIST-aligned security frameworks, continuous monitoring, and compliance automation for enterprise protection.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Risk Management",
                description: "Comprehensive risk assessment, threat modeling, and vulnerability management programs.",
              },
              {
                title: "Compliance Support",
                description: "NIST CSF, ISO 27001, and SOC 2 readiness assessments and remediation planning.",
              },
              {
                title: "Data Security",
                description: "Encryption, DLP, data classification, and privacy engineering for sensitive information.",
              },
              {
                title: "Penetration Testing",
                description: "Red team exercises, web application testing, and network security assessments.",
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
