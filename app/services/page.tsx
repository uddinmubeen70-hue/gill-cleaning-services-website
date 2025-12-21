export default function ServicesPage() {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Our Cleaning Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        
        <div className="p-6 shadow-lg border rounded-xl hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Office Cleaning</h2>
          <p className="text-lg mb-2">
            Daily, weekly, or customised cleaning solutions for offices of all sizes.
          </p>
          <p className="text-blue-700 font-semibold">✔ Reliable & Consistent</p>
        </div>

        <div className="p-6 shadow-lg border rounded-xl hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Commercial Cleaning</h2>
          <p className="text-lg mb-2">
            Retail stores, clinics, warehouses, restaurants, all handled with care.
          </p>
          <p className="text-blue-700 font-semibold">✔ High-Quality Cleaning</p>
        </div>

        <div className="p-6 shadow-lg border rounded-xl hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Residential Cleaning</h2>
          <p className="text-lg mb-2">
            Deep cleaning, regular maintenance, and move-in/move-out services.
          </p>
          <p className="text-blue-700 font-semibold">✔ Safe & Hygiene Focused</p>
        </div>

        <div className="p-6 shadow-lg border rounded-xl hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Carpet & Upholstery</h2>
          <p className="text-lg mb-2">
            Steam cleaning for carpets, sofas, rugs, and seats.
          </p>
          <p className="text-blue-700 font-semibold">✔ Stain + Odour Removal</p>
        </div>

        <div className="p-6 shadow-lg border rounded-xl hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Window Cleaning</h2>
          <p className="text-lg mb-2">
            Interior and exterior window cleaning using streak-free methods.
          </p>
          <p className="text-blue-700 font-semibold">✔ Crystal Clear Finish</p>
        </div>

        <div className="p-6 shadow-lg border rounded-xl hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3">Sanitisation</h2>
          <p className="text-lg mb-2">
            Hospital-grade disinfecting services for safer workplaces.
          </p>
          <p className="text-blue-700 font-semibold">✔ Health-Focused</p>
        </div>

      </div>
    </div>
  );
}
