export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-3">Gill Cleaning Services</h3>
          <p className="text-gray-400">
            Professional commercial and residential cleaning across Auckland.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Contact</h3>
          <p>📞 022 123 4567</p>
          <p>📧 info@gillcleaningservices.co.nz</p>
          <p>📍 Auckland, New Zealand</p>
        </div>

      </div>

      <div className="bg-black text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Gill Cleaning Services
      </div>
    </footer>
  );
}
