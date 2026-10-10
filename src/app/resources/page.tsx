import type { Metadata } from "next";
import resourcesData from "@/data/resources.json";
import ResourceLibrary, { type ResourceItem } from "@/components/sections/ResourceLibrary";

export const metadata: Metadata = {
  title: "Public Resources | Mesisem Global LLC",
  description:
    "Searchable public reference library: curated summaries with outbound source links across cybersecurity, technology, analytics, marketing, media, consulting and ventures.",
  alternates: { canonical: "https://mesisemglobal.com/resources/" },
};

const data = resourcesData as { version: number; updatedAt: string; resources: ResourceItem[] };

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Public Resources
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl mx-auto">
            Curated, original summaries and outbound source links. Catalog v{data.version}, updated{" "}
            {data.updatedAt}. Company-provided records are self-reported and not independently verified.
          </p>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto section-padding">
          <ResourceLibrary initial={data.resources} />
        </div>
      </section>
    </div>
  );
}
