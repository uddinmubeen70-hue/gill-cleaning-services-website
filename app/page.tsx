export default function HomePage() {
  return (
    <section
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full">
          <source media="(max-width:768px)" srcSet="/home-bg-mobile.jpg" />
          <img
            src="/home-bg.jpg"
            alt="Cleaning Services"
            className="w-full h-full object-cover"
          />
        </picture>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Professional Commercial Cleaning <br className="hidden md:block" />
          Services in New Zealand
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-200">
          Quality Cleaning for a Safer, Healthier Workplace.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/quote"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Get a Free Quote
          </a>

          <a
            href="/services"
            className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-semibold transition"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
