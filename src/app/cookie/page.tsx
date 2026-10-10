export const metadata = {
  title: "Cookie Policy | Mesisem Global LLC",
  description: "Cookie policy for Mesisem Global LLC.",
};

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-black py-20 lg:py-28">
      <div className="max-w-4xl mx-auto section-padding">
        <h1 className="font-serif text-4xl font-bold text-metallic-light mb-8">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-metallic-mid mb-6">Last updated: April 27, 2026</p>
          <p className="text-metallic-mid mb-6">This Cookie Policy explains how Mesisem Global LLC uses cookies and similar technologies on our website.</p>
          <h2 className="text-metallic-light font-semibold text-xl mt-8 mb-4">What Are Cookies</h2>
          <p className="text-metallic-mid mb-4">Cookies are small text files stored on your device that help us improve your browsing experience.</p>
          <h2 className="text-metallic-light font-semibold text-xl mt-8 mb-4">How We Use Cookies</h2>
          <p className="text-metallic-mid mb-4">We use essential cookies for website functionality. We do not use tracking or advertising cookies.</p>
          <h2 className="text-metallic-light font-semibold text-xl mt-8 mb-4">Your Choices</h2>
          <p className="text-metallic-mid">You can control cookies through your browser settings. Disabling essential cookies may affect website functionality.</p>
        </div>
      </div>
    </div>
  );
}
