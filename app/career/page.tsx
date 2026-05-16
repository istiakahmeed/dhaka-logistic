"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CareerPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", cv: null as File | null });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section ref={ref} className="bg-surface-light pt-[140px] pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display font-extrabold text-neutral-dark leading-[1.05] text-[40px] md:text-[56px] lg:text-[64px] max-w-3xl"
          >
            Join Our
            <br />
            Team.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-[17px] font-body text-neutral-mid leading-relaxed max-w-[540px] mt-6"
          >
            Send us your CV and we&apos;ll reach out when a role matches your profile.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-[96px] md:py-[120px]">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-green-accent bg-green-accent/5 p-8 text-center"
            >
              <p className="font-display font-bold text-xl text-green-primary mb-2">
                Application Received
              </p>
              <p className="text-sm font-body text-neutral-mid">
                Thank you, {form.name}. We&apos;ll review your CV and contact you at {form.email} if your profile matches an opening.
              </p>
            </motion.div>
          ) : (
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full pb-2 text-sm font-body text-neutral-dark border-b border-neutral-mid outline-none focus:border-green-accent transition-colors bg-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-neutral-dark mb-2">
                  Upload CV
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setForm({ ...form, cv: e.target.files?.[0] || null })}
                  className="w-full text-sm font-body text-neutral-mid file:mr-4 file:py-2 file:px-4 file:border file:border-divider file:text-sm file:font-body file:bg-surface-light file:text-neutral-mid hover:file:bg-gray-200 transition-colors cursor-pointer"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-primary text-white text-sm font-body font-medium py-3.5 transition-colors duration-150 hover:bg-green-primary-hover"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
