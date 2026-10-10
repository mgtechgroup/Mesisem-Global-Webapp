import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact | Mesisem Global LLC",
  description: "Schedule a consultation with Mesisem Global LLC. Consulting rate: $350/hour.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 lg:py-28 bg-steel/30 border-b border-metallic-dark/20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-metallic-light mb-6">
            Contact
          </h1>
          <p className="text-metallic-mid text-lg sm:text-xl max-w-3xl mx-auto">
            Ready to discuss your project? Schedule a consultation or reach out directly.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-metallic-light font-semibold text-2xl mb-6 uppercase tracking-wider">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="card-metallic">
                  <p className="text-metallic-dark text-sm uppercase tracking-wider mb-2">Email</p>
                  <p className="text-metallic-light font-medium">legal@mesisemglobal.com</p>
                </div>
                <div className="card-metallic">
                  <p className="text-metallic-dark text-sm uppercase tracking-wider mb-2">Phone</p>
                  <p className="text-metallic-light font-medium">+1-302-587-7997</p>
                </div>
                <div className="card-metallic">
                  <p className="text-metallic-dark text-sm uppercase tracking-wider mb-2">Address</p>
                  <p className="text-metallic-mid text-sm">254 Chapman Road, Suite 208 #23556</p>
                  <p className="text-metallic-mid text-sm">Newark, DE 19702, USA</p>
                </div>
                <div className="card-metallic">
                  <p className="text-metallic-dark text-sm uppercase tracking-wider mb-2">Consulting Rate</p>
                  <p className="text-metallic-light font-medium">$350/hour</p>
                  <p className="text-metallic-mid text-sm">Deposit: $150 · Minimum: 3 months</p>
                </div>
              </div>

              <div className="mt-8 p-6 border border-metallic-dark/30 rounded-lg bg-steel/10">
                <p className="text-metallic-mid text-sm leading-relaxed">
                  <strong className="text-metallic-light">Disclaimer:</strong> This contact form does not establish an attorney-client or consulting relationship. All inquiries are subject to our standard engagement process and compliance verification.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
