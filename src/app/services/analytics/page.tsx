import Link from "next/link";

export const metadata = {
  title: "Analytics Services | Mesisem Global LLC",
  description: "Dashboards, business intelligence, and automated reporting systems.",
};

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding">
          <Link href="/services/" className="text-metallic-mid hover:text-metallic-light text-sm mb-6 inline-block">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Analytics
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl">
            Real-time dashboards, predictive models, and automated reporting for data-driven decision making.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dashboards",
                description: "Custom real-time dashboards with KPI tracking, alerts, and executive reporting.",
              },
              {
                title: "Business Intelligence",
                description: "ETL pipelines, data warehousing, and BI tool implementation (Tableau, Power BI, Looker).",
              },
              {
                title: "Reporting",
                description: "Automated report generation, scheduled distributions, and compliance reporting.",
              },
              {
                title: "Data Visualization",
                description: "Interactive charts, geospatial mapping, and custom visualization components.",
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
