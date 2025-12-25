export default function HomePage() {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
      
      {/* Background Image */}
      <picture className="absolute inset-0">
        <source media="(max-width:768px)" srcSet="/home-bg-mobile.jpg" />
        <img
          src="/home-bg.jpg"
          alt="Cleaning Services"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 text-white max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Professional Commercial Cleaning
          <br className="hidden md:block" />
          Services in New Zealand
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-200">
          Quality Cleaning for a Safer, Healthier Workplace.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="/quote"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition"
          >
            Get a Free Quote
          </a>

          <a
            href="/services"
            className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-gray-100 rounded-lg font-semibold text-gray-900 transition"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
