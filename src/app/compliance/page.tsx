const frameworks = [
  {
    category: "Financial",
    items: [
      { name: "Bank Secrecy Act (BSA)", description: "Anti-money laundering and record-keeping compliance" },
      { name: "USA PATRIOT Act", description: "Customer identification and suspicious activity monitoring" },
      { name: "OFAC", description: "Sanctions compliance and blocked party screening" },
      { name: "FATF", description: "International standards for combating money laundering" },
    ],
  },
  {
    category: "Data Privacy",
    items: [
      { name: "GDPR", description: "EU General Data Protection Regulation compliance" },
      { name: "CCPA", description: "California Consumer Privacy Act" },
      { name: "PDPL", description: "Personal Data Protection Law (UAE)" },
      { name: "UAE Data Law", description: "United Arab Emirates data protection framework" },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      { name: "NIST CSF", description: "National Institute of Standards and Technology Cybersecurity Framework" },
      { name: "ISO 27001", description: "Information Security Management (target certification)", target: true },
      { name: "SOC 2 Type II", description: "Service Organization Control audit (target certification)", target: true },
    ],
  },
  {
    category: "Anti-Corruption",
    items: [
      { name: "FCPA", description: "Foreign Corrupt Practices Act" },
      { name: "UK Bribery Act", description: "United Kingdom Bribery Act 2010" },
    ],
  },
];

export const metadata = {
  title: "Compliance | Mesisem Global LLC",
  description: "Enterprise-grade compliance framework: BSA, GDPR, NIST CSF, SOC 2, FCPA, and more.",
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Compliance Framework
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl mx-auto">
            Multi-jurisdictional regulatory compliance across financial, data, cybersecurity, and anti-corruption domains.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {frameworks.map((fw, index) => (
              <div key={index} className="border border-metallic-dark/30 rounded-lg p-8 bg-steel/20">
                <h2 className="text-metallic-light font-semibold text-2xl mb-6 uppercase tracking-wider">
                  {fw.category}
                </h2>
                <div className="space-y-4">
                  {fw.items.map((item, iIndex) => (
                    <div key={iIndex} className="flex items-start justify-between gap-4 pb-4 border-b border-metallic-dark/20 last:border-0 last:pb-0">
                      <div>
                        <h3 className="text-metallic-mid font-medium text-lg">
                          {item.name}
                          {item.target && (
                            <span className="text-metallic-dark text-xs ml-2">(target)</span>
                          )}
                        </h3>
                        <p className="text-metallic-dark text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AML/KYC Section */}
      <section className="py-20 lg:py-28 bg-steel/30 border-y border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-metallic-light mb-4">
              AML / KYC Program
            </h2>
            <p className="text-metallic-mid max-w-2xl mx-auto">
              Comprehensive anti-money laundering and know-your-customer procedures.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Identity Verification", desc: "Multi-factor identity validation for all clients" },
              { title: "Risk Scoring", desc: "Automated risk assessment and client classification" },
              { title: "Transaction Monitoring", desc: "Real-time monitoring for suspicious activity" },
              { title: "SAR Reporting", desc: "Suspicious Activity Report filing procedures" },
            ].map((item, index) => (
              <div key={index} className="card-metallic text-center">
                <h3 className="text-metallic-light font-semibold mb-2">{item.title}</h3>
                <p className="text-metallic-mid text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <p className="text-metallic-mid text-sm">
            Audit threshold: <span className="text-metallic-light font-medium">$5,000,000 USD</span> · Record retention: <span className="text-metallic-light font-medium">7 years</span> · Dispute resolution: <span className="text-metallic-light font-medium">Delaware arbitration</span>
          </p>
        </div>
      </section>
    </div>
  );
}
