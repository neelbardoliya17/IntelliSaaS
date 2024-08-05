import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapIcon } from "@heroicons/react/20/solid";

const contacts = [
  {
    name: "Customer Support",
    description:
      "For any inquiries or support, feel free to reach out to our customer support team. We are available 24/7 to assist you with any questions or issues.",
    icon: PhoneIcon,
  },
  {
    name: "Media & Press",
    description:
      "For media inquiries and press relations, please contact our media team. We are eager to share the latest news and updates about IntelliSaaS.",
    icon: EnvelopeIcon,
  },
  {
    name: "Our Location",
    description:
      "Visit us at our office for a face-to-face consultation. Our team is always ready to welcome you and discuss how IntelliSaaS can help your business grow.",
    icon: MapIcon,
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your response saved successfully`);
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Background elements, if any */}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Get in Touch with IntelliSaaS
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Whether you have questions, need support, or want to explore
            collaboration opportunities, our team is here to help. Reach out to
            us through the channels below.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <contact.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{contact.name}</h3>
                <p className="mt-2 text-gray-300">{contact.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white">Contact Us Form</h3>
          <form onSubmit={handleSubmit} className="mt-8 max-w-lg">
            <div className="flex flex-col gap-6">
              <label className="text-white">
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-700 text-white"
                  required
                />
              </label>
              <label className="text-white">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-700 text-white"
                  required
                />
              </label>
              <label className="text-white">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-700 text-white"
                  rows="4"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
