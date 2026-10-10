import Link from "next/link";

const tiers = [
  { name: "Bronze", price: "$2,635", note: "Base tier", features: ["Core consulting", "Email support", "Monthly reporting"] },
  { name: "Silver", price: "+22%", note: "Growth tier", features: ["Priority consulting", "Phone support", "Weekly reporting", "Automation setup"] },
  { name: "Gold", price: "+26%", note: "Scale tier", features: ["Dedicated advisor", "24/7 support", "Real-time dashboards", "Custom integrations"] },
  { name: "Platinum", price: "+32%", note: "Enterprise tier", features: ["Executive advisory", "White-glove support", "Custom development", "On-site visits"] },
  { name: "Palladium", price: "Custom", note: "Bespoke engagement", features: ["Full-service partnership", "Equity participation", "Board advisory", "Global deployment"] },
];

const discounts = [
  { term: "3 months", discount: "5%" },
  { term: "6 months", discount: "11%" },
  { term: "12 months", discount: "15%" },
  { term: "24 months", discount: "22%" },
  { term: "36 months", discount: "26%" },
  { term: "48 months", discount: "32%" },
];

export const metadata = {
  title: "Pricing | Mesisem Global LLC",
  description: "Transparent pricing for consulting and subscription services. Consulting rate: $350/hour.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Pricing
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl mx-auto">
            Transparent, value-aligned pricing. No hidden fees. Scale as you grow.
          </p>
        </div>
      </section>

      {/* Consulting Rate */}
      <section className="py-16 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <p className="text-metallic-mid text-sm uppercase tracking-wider mb-4">Consulting Rate</p>
          <p className="text-metallic-light font-bold text-5xl sm:text-6xl mb-2">$350<span className="text-2xl text-metallic-mid font-normal">/hour</span></p>
          <p className="text-metallic-mid">Deposit: $150 · Minimum commitment: 3 months</p>
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <h2 className="font-serif text-3xl font-bold text-metallic-light text-center mb-12">
            Subscription Tiers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {tiers.map((tier, index) => (
              <div key={index} className="card-metallic flex flex-col">
                <h3 className="text-metallic-light font-semibold text-xl mb-1">{tier.name}</h3>
                <p className="text-metallic-light font-bold text-3xl mb-1">{tier.price}</p>
                <p className="text-metallic-dark text-xs mb-4">{tier.note}</p>
                <ul className="space-y-2 flex-1">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-metallic-mid text-xs flex items-start gap-2">
                      <span className="text-metallic-dark mt-0.5">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact/" className="btn-primary text-center text-sm mt-6 uppercase tracking-wider">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Discounts */}
      <section className="py-20 lg:py-28 bg-steel/30 border-y border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding">
          <h2 className="font-serif text-3xl font-bold text-metallic-light text-center mb-12">
            Commitment Discounts
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {discounts.map((d, index) => (
              <div key={index} className="text-center p-4 border border-metallic-dark/30 rounded-sm bg-steel/20">
                <p className="text-metallic-light font-bold text-2xl mb-1">{d.discount}</p>
                <p className="text-metallic-mid text-sm">{d.term}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <p className="text-metallic-mid text-sm uppercase tracking-wider mb-4">Accepted Payment Methods</p>
          <div className="flex flex-wrap justify-center gap-6 text-metallic-mid">
            <span>ACH</span>
            <span>Wire Transfer</span>
            <span>Credit Card</span>
            <span>Cryptocurrency</span>
          </div>
        </div>
      </section>
    </div>
  );
}
