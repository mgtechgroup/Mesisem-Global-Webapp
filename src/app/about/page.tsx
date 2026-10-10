const members = [
  { name: "Aziel Melek", ownership: "51%", role: "Controlling Member" },
  { name: "AEEM Melek Consulting LLC", ownership: "34%", role: "Member" },
  { name: "Mesisem Global Entertainment LLC", ownership: "15%", role: "Member" },
];

const revenueStreams = [
  "Consulting",
  "Subscription Services",
  "SaaS Products",
  "Media & IP",
  "E-Commerce",
  "Affiliate Program",
  "Equity Participation",
];

export const metadata = {
  title: "About | Mesisem Global LLC",
  description: "Mesisem Global LLC — Delaware Series LLC. Entity information, ownership structure, and business model.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            About
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl mx-auto">
            Delaware Series LLC combining structured legal architecture, global compliance, and multi-revenue systems for scalable enterprise value.
          </p>
        </div>
      </section>

      {/* Entity Info */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-metallic-light font-semibold text-2xl mb-6 uppercase tracking-wider">
                Entity Information
              </h2>
              <div className="space-y-4">
                {[
                  { label: "Legal Name", value: "Mesisem Global LLC" },
                  { label: "Entity Type", value: "Series Limited Liability Company" },
                  { label: "Jurisdiction", value: "Delaware, United States" },
                  { label: "EIN", value: "39-2830581" },
                  { label: "Formation Date", value: "June 23, 2025" },
                  { label: "Effective Date", value: "June 24, 2025" },
                  { label: "Duration", value: "Perpetual" },
                  { label: "Governing Law", value: "Delaware LLC Act §18-215" },
                  { label: "Tax Classification", value: "S-Corporation (effective 2026-01-01)" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-metallic-dark/20">
                    <span className="text-metallic-dark text-sm">{item.label}</span>
                    <span className="text-metallic-mid text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-metallic-light font-semibold text-2xl mb-6 uppercase tracking-wider">
                Principal Office
              </h2>
              <div className="space-y-4 mb-10">
                <div className="card-metallic">
                  <p className="text-metallic-light font-medium mb-1">Mesisem Global LLC</p>
                  <p className="text-metallic-mid text-sm">254 Chapman Road, Suite 208 #23556</p>
                  <p className="text-metallic-mid text-sm">Newark, Delaware 19702</p>
                  <p className="text-metallic-mid text-sm">United States</p>
                  <div className="mt-4 pt-4 border-t border-metallic-dark/20">
                    <p className="text-metallic-mid text-sm">Phone: +1-302-587-7997</p>
                    <p className="text-metallic-mid text-sm">Email: legal@mesisemglobal.com</p>
                  </div>
                </div>
              </div>

              <h2 className="text-metallic-light font-semibold text-2xl mb-6 uppercase tracking-wider">
                Registered Agent
              </h2>
              <div className="card-metallic">
                <p className="text-metallic-light font-medium mb-1">Republic Registered Agent LLC</p>
                <p className="text-metallic-mid text-sm">262 Chapman Road, Suite 240</p>
                <p className="text-metallic-mid text-sm">Newark, Delaware 19702</p>
                <p className="text-metallic-mid text-sm">United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="py-20 lg:py-28 bg-steel/30 border-y border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding">
          <h2 className="font-serif text-3xl font-bold text-metallic-light text-center mb-12">
            Ownership Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {members.map((member, index) => (
              <div key={index} className="card-metallic text-center">
                <p className="text-metallic-light font-bold text-3xl mb-2">{member.ownership}</p>
                <p className="text-metallic-light font-medium mb-1">{member.name}</p>
                <p className="text-metallic-mid text-sm">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-metallic-mid text-sm">
              Decision Model: Majority-in-interest · Supermajority Threshold: 66.67%
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <h2 className="font-serif text-3xl font-bold text-metallic-light text-center mb-12">
            Revenue Streams
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {revenueStreams.map((stream, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-metallic-dark/30 rounded-sm text-metallic-mid text-sm hover:border-metallic-mid/50 transition-colors"
              >
                {stream}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
