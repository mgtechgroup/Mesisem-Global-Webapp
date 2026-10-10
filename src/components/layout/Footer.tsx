import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/services/consulting/", label: "Consulting" },
  { href: "/services/technology/", label: "Technology" },
  { href: "/services/cybersecurity/", label: "Cybersecurity" },
  { href: "/services/analytics/", label: "Analytics" },
  { href: "/services/marketing/", label: "Marketing" },
  { href: "/services/media/", label: "Media" },
  { href: "/services/ventures/", label: "Ventures" },
];

const companyLinks = [
  { href: "/about/", label: "About" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/compliance/", label: "Compliance" },
  { href: "/resources/", label: "Resources" },
  { href: "/contact/", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
  { href: "/cookie/", label: "Cookie Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-steel border-t border-metallic-dark/30">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto section-padding py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 overflow-hidden">
                <Image
                  src="/assets/logo/mesisem-logo-final.png"
                  alt="Mesisem Global LLC"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-metallic-light font-semibold text-lg">MESIS</span>
                <span className="text-metallic-mid font-light text-lg">EM GLOBAL</span>
              </div>
            </Link>
            <p className="text-metallic-mid text-sm leading-relaxed mb-4">
              Delaware Series LLC providing global enterprise solutions across consulting, technology, media, and venture development.
            </p>
            <div className="text-metallic-mid text-xs space-y-1">
              <p>EIN: 39-2830581</p>
              <p>254 Chapman Road, Suite 208 #23556</p>
              <p>Newark, DE 19702, USA</p>
              <p>+1-302-587-7997</p>
              <p>legal@mesisemglobal.com</p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-metallic-light font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-metallic-mid text-sm hover:text-metallic-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-metallic-light font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-metallic-mid text-sm hover:text-metallic-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Column */}
          <div>
            <h3 className="text-metallic-light font-semibold text-sm uppercase tracking-wider mb-4">
              Compliance
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-metallic-mid text-xs uppercase tracking-wider mb-1">Financial</p>
                <p className="text-metallic-mid/70 text-xs">BSA | PATRIOT Act | OFAC | FATF</p>
              </div>
              <div>
                <p className="text-metallic-mid text-xs uppercase tracking-wider mb-1">Data</p>
                <p className="text-metallic-mid/70 text-xs">GDPR | CCPA | PDPL | UAE Data Law</p>
              </div>
              <div>
                <p className="text-metallic-mid text-xs uppercase tracking-wider mb-1">Cybersecurity</p>
                <p className="text-metallic-mid/70 text-xs">NIST CSF | ISO 27001 (target) | SOC 2 Type II (target)</p>
              </div>
              <div>
                <p className="text-metallic-mid text-xs uppercase tracking-wider mb-1">Anti-Corruption</p>
                <p className="text-metallic-mid/70 text-xs">FCPA | UK Bribery Act</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-metallic-dark/30">
        <div className="max-w-7xl mx-auto section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-metallic-mid/60 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Mesisem Global LLC. Delaware Series LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-metallic-mid/60 text-xs hover:text-metallic-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
