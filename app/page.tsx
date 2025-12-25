export default function HomePage() {
  return (
    <section
      style={{ height: "calc(100vh - 64px)" }}
      className="relative w-full flex items-center justify-center text-center overflow-hidden"
    >
      <picture className="absolute inset-0 w-full h-full">
        <source media="(max-width:768px)" srcSet="/home-bg-mobile.jpg" />
        <img
          src="/home-bg.jpg"
          alt="Cleaning Services"
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Professional Commercial Cleaning <br />
          Services in New Zealand
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Quality Cleaning for a Safer, Healthier Workplace.
        </p>

        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          <a href="/quote" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Get a Free Quote
          </a>
          <a href="/services" className="px-6 py-3 bg-white text-gray-900 rounded-lg">
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
