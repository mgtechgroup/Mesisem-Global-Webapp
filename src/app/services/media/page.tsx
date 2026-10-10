import Link from "next/link";

export const metadata = {
  title: "Media Services | Mesisem Global LLC",
  description: "Music, film, content production, and artist management.",
};

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding">
          <Link href="/services/" className="text-metallic-mid hover:text-metallic-light text-sm mb-6 inline-block">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Media
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl">
            Music production, film development, content creation, and artist management for global entertainment markets.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Music Production",
                description: "Recording, mixing, mastering, and distribution strategy for independent and label artists.",
              },
              {
                title: "Film",
                description: "Development, production, post-production, and distribution for feature and short-form content.",
              },
              {
                title: "Content",
                description: "Digital content creation, streaming strategy, and IP development.",
              },
              {
                title: "Artist Management",
                description: "Career strategy, contract negotiation, brand partnerships, and tour management.",
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
