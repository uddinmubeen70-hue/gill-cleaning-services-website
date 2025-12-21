
"use client";

export default function ContactPage() {
  return (
    <div className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-3">📍 Auckland, New Zealand</p>
          <p className="text-lg mb-3">📞 022 123 4567</p>
          <p className="text-lg mb-3">📧 info@gillservices.co.nz</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Business Hours</h2>
          <p className="text-lg mb-2">Mon–Fri: 8am – 6pm</p>
          <p className="text-lg mb-2">Sat: 9am – 4pm</p>
          <p className="text-lg mb-2">Sun: Closed</p>
        </div>

        {/* Form */}
        <form className="space-y-4 p-6 border shadow-lg rounded-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border p-3 rounded"
          />
          <button className="bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map Placeholder */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
          Google Map Here
        </div>
      </div>
    </div>
  );
}
