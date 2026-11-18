import Link from "next/link";

export default function NotFound() {
  return (
    <section className="aurora-field grain flex min-h-[70vh] items-center py-20 text-cream">
      <div className="container-page text-center">
        <p className="eyebrow justify-center text-mint">404</p>
        <h1 className="display-hero mt-5 text-cream">This page is out of reach.</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-cream/70">
          The page you are looking for is not here. Let&apos;s get you back to
          Northern Lights Dental.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center rounded-full bg-aurora px-6 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center rounded-full border border-white/25 px-6 text-sm font-bold text-cream transition-colors hover:bg-white/10"
          >
            Make an appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
