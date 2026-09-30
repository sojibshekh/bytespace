import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="grid min-h-dvh place-items-center overflow-hidden bg-[#073CE0] px-5 py-16 text-center sm:px-8 lg:px-12"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(255 255 255 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.12) 1px, transparent 1px)",
        backgroundSize: "8vw 8vw",
      }}
    >
      <div className="grid justify-items-center">
        <p
          aria-hidden="true"
          className="bg-linear-to-b from-[#D4FB20] via-[#D4FB20] to-[#D4FB20]/0 bg-clip-text font-poppins text-[clamp(8rem,28vw,25rem)] font-semibold leading-none tracking-tight text-transparent"
        >
          404
        </p>

        <h1 className="relative -mt-6 font-poppins text-3xl font-semibold leading-tight text-white sm:-mt-10 sm:text-4xl lg:-mt-16 lg:text-6xl">
          The page you are looking
          <br className="hidden sm:block" />
          <span className="sm:before:content-[' ']">
            for doesn’t exist
          </span>
        </h1>

        <p className="mt-7 font-sans text-base leading-relaxed text-white/80">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-7 rounded-full bg-[#D4FB20] px-6 py-2.5 font-sans text-base font-medium text-[#171717] transition-colors hover:bg-[#C5EB12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}