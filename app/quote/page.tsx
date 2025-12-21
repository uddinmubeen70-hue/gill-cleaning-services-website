"use client";
import { useState } from "react";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Your quote request has been submitted!");
    console.log("Form Data:", form);
  };

  return (
    <div className="px-6 py-16 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Get a Free Quote</h1>

      <p className="text-lg mb-6">
        Fill in the form below and our team will contact you shortly.
      </p>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded-md"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-md"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-md"
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          className="w-full p-3 border rounded-md"
          onChange={handleChange}
        />

        <input
          name="service"
          placeholder="Service Needed (e.g. Office Cleaning)"
          className="w-full p-3 border rounded-md"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Additional Details"
          className="w-full p-3 border rounded-md h-32"
          onChange={handleChange}
        />

        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-blue-700 text-white rounded-md hover:bg-blue-800"
        >
          Submit Quote Request
        </button>
      </div>
    </div>
  );
}
