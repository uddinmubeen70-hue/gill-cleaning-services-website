export default function HomePage() {
  return (
    <section
      className="
        relative
        w-full
        h-[calc(100svh-64px)]
        flex
        items-center
        justify-center
        text-center
        overflow-hidden
      "
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/home-bg.jpg"
        alt="Cleaning Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 text-white px-4 max-w-4xl w-full">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Professional Commercial Cleaning <br className="hidden md:block" />
          Services in New Zealand
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-200">
          Quality Cleaning for a Safer, Healthier Workplace.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/quote"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
          >
            Get a Free Quote
          </a>

          <a
            href="/services"
            className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-semibold transition"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
