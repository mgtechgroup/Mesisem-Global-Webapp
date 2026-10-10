export const metadata = {
  title: "Terms of Service | Mesisem Global LLC",
  description: "Terms of service for Mesisem Global LLC.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black py-20 lg:py-28">
      <div className="max-w-4xl mx-auto section-padding">
        <h1 className="font-serif text-4xl font-bold text-metallic-light mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-metallic-mid mb-6">Last updated: April 27, 2026</p>
          <p className="text-metallic-mid mb-6">These Terms of Service (&quot;Terms&quot;) govern your access to and use of the services provided by Mesisem Global LLC, a Delaware Series Limited Liability Company.</p>
          <h2 className="text-metallic-light font-semibold text-xl mt-8 mb-4">Services</h2>
          <p className="text-metallic-mid mb-4">Mesisem Global LLC provides consulting, technology, cybersecurity, analytics, marketing, media, and venture development services subject to separate engagement agreements.</p>
          <h2 className="text-metallic-light font-semibold text-xl mt-8 mb-4">No Guarantees</h2>
          <p className="text-metallic-mid mb-4">We do not guarantee specific outcomes from our services. All engagements are subject to professional standards and good faith execution.</p>
          <h2 className="text-metallic-light font-semibold text-xl mt-8 mb-4">Governing Law</h2>
          <p className="text-metallic-mid mb-4">These Terms are governed by the laws of the State of Delaware. Any disputes shall be resolved through arbitration in Delaware.</p>
          <h2 className="text-metallic-light font-semibold text-xl mt-8 mb-4">Contact</h2>
          <p className="text-metallic-mid">For legal inquiries: legal@mesisemglobal.com</p>
        </div>
      </div>
    </div>
  );
}
