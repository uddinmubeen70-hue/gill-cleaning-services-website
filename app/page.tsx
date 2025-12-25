export default function HomePage() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center text-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/home-bg.jpg"
        alt="Cleaning Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 text-white px-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Professional Commercial Cleaning Services in New Zealand
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
          Quality Cleaning for a Safer, Healthier Workplace.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/quote"
            className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 text-base"
          >
            Get a Free Quote
          </a>

          <a
            href="/services"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 text-base"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
