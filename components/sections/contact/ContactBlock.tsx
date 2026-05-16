"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

const services = data.services.map((s) => s.title);

export function ContactBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { company, contacts } = data;

  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handled here
  };

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark mb-8">
            Reach Us
          </h2>

          <div className="h-px bg-divider mb-8" />

          <div className="mb-8">
            <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-green-accent mb-2">
              Corporate Office
            </h4>
            <p className="text-sm font-body text-neutral-mid leading-relaxed">
              {company.offices.corporate.address}
            </p>
          </div>

          <div className="mb-8">
            <p className="text-sm font-body text-neutral-mid">
              Tel: {company.phone}
              <br />
              Email: {company.emails[0]}
              <br />
              Web: {company.website}
            </p>
          </div>

          <div className="h-px bg-divider mb-8" />

          {contacts.map((person, i) => (
            <div key={i} className="mb-8 last:mb-0">
              <p className="text-sm font-body font-semibold text-neutral-dark">
                {person.name}
              </p>
              <p className="text-xs font-body text-green-accent mb-1">
                {person.designation}
              </p>
              <p className="text-sm font-body text-neutral-mid">
                {person.phone}
                <br />
                {person.email}
              </p>
            </div>
          ))}

          <div className="h-px bg-divider my-8" />

          <div>
            <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-green-accent mb-2">
              Registered Office
            </h4>
            <p className="text-sm font-body text-neutral-mid leading-relaxed">
              {company.offices.registered.address}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-xs font-body font-semibold text-neutral-dark mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full pb-2 text-sm font-body text-neutral-dark border-b border-neutral-mid outline-none focus:border-green-accent transition-colors bg-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-body font-semibold text-neutral-dark mb-2">
                Organization
              </label>
              <input
                type="text"
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full pb-2 text-sm font-body text-neutral-dark border-b border-neutral-mid outline-none focus:border-green-accent transition-colors bg-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-body font-semibold text-neutral-dark mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full pb-2 text-sm font-body text-neutral-dark border-b border-neutral-mid outline-none focus:border-green-accent transition-colors bg-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-body font-semibold text-neutral-dark mb-2">
                Service of Interest
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full pb-2 text-sm font-body text-neutral-dark border-b border-neutral-mid outline-none focus:border-green-accent transition-colors bg-transparent appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-body font-semibold text-neutral-dark mb-2">
                Your Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full pb-2 text-sm font-body text-neutral-dark border-b border-neutral-mid outline-none focus:border-green-accent transition-colors bg-transparent resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-primary text-white text-sm font-body font-medium py-3.5 transition-colors duration-150 hover:bg-green-primary-hover flex items-center justify-center gap-2"
            >
              Send Inquiry
              <span>&rarr;</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
