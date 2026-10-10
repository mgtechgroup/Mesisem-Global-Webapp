import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | Mesisem Global LLC",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-black">
      <div className="text-center section-padding">
        <h1 className="font-serif text-6xl sm:text-8xl font-bold text-metallic-light mb-4">404</h1>
        <p className="text-metallic-mid text-xl mb-8">Page not found</p>
        <p className="text-metallic-dark text-sm mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary uppercase tracking-wider">
          Return Home
        </Link>
      </div>
    </div>
  );
}
