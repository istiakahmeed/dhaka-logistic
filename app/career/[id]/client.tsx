"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JobPost } from "@/types/dlss";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface JobDetailClientProps {
  job: JobPost;
  prevJob: JobPost | null;
  nextJob: JobPost | null;
}

export default function JobDetailClient({
  job,
  prevJob,
  nextJob,
}: JobDetailClientProps) {
  const isActive = job.active !== false;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Job Header */}
      <section className="bg-green-primary text-white pt-[140px] pb-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link
            href="/career"
            className="inline-flex items-center text-sm font-body text-green-accent mb-8 hover:gap-2 transition-all">
            ← Back to All Positions
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs font-body font-semibold text-green-accent mb-3 uppercase tracking-wide">
                  {job.department}
                </p>
                <h1 className="font-display font-extrabold text-gray-100 text-[40px] md:text-[56px] leading-tight">
                  {job.title}
                </h1>
              </div>
              <span className="font-display font-bold text-2xl text-green-accent">
                {job.id}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-8 mt-8">
              <div>
                <p className="text-xs font-body text-gray-400 mb-1">Location</p>
                <p className="font-body font-medium text-white">
                  {job.location}
                </p>
              </div>
              <div>
                <p className="text-xs font-body text-gray-400 mb-1">
                  Employment Type
                </p>
                <p className="font-body font-medium text-white">{job.type}</p>
              </div>
              <div>
                <p className="text-xs font-body text-gray-400 mb-1">
                  Experience
                </p>
                <p className="font-body font-medium text-white">
                  {job.experience}
                </p>
              </div>
              {job.salary && (
                <div>
                  <p className="text-xs font-body text-gray-400 mb-1">Salary</p>
                  <p className="font-body font-medium text-green-accent">
                    {job.salary}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details & Form */}
      <section className="bg-white py-[96px] md:py-[120px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Job Details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:col-span-1">
              <div className="bg-surface-light p-8">
                <h3 className="font-display font-bold text-lg text-neutral-dark mb-6">
                  Job Overview
                </h3>

                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-body font-semibold text-neutral-dark mb-3 uppercase tracking-wider">
                      Description
                    </p>
                    <p className="text-sm font-body text-neutral-mid leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {job.qualifications && job.qualifications.length > 0 && (
                    <div>
                      <p className="text-xs font-body font-semibold text-neutral-dark mb-3 uppercase tracking-wider">
                        Qualifications
                      </p>
                      <ul className="space-y-2">
                        {job.qualifications.map((qual, idx) => (
                          <li
                            key={idx}
                            className="text-sm font-body text-neutral-mid flex gap-3">
                            <span className="text-green-accent mt-1">•</span>
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.requirements && job.requirements.length > 0 && (
                    <div>
                      <p className="text-xs font-body font-semibold text-neutral-dark mb-3 uppercase tracking-wider">
                        Requirements
                      </p>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="text-sm font-body text-neutral-mid flex gap-3">
                            <span className="text-green-accent mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-2">
              <div className="max-w-2xl">
                <h2 className="font-display font-bold text-2xl text-neutral-dark mb-8">
                  {isActive ? "Apply for this Position" : "Position Closed"}
                </h2>

                {!isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-300 bg-gray-50 p-8 text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-gray-400">✕</span>
                    </div>
                    <p className="font-display font-bold text-xl text-neutral-mid mb-2">
                      This Position is Currently Inactive
                    </p>
                    <p className="text-sm font-body text-neutral-mid mb-6">
                      We're not accepting applications for this role at the moment. 
                      Please check back later or browse our other open positions.
                    </p>
                    <Link
                      href="/career"
                      className="inline-flex items-center text-sm font-body font-semibold text-green-accent hover:gap-2 transition-all">
                      Browse Open Positions →
                    </Link>
                  </motion.div>
                ) : submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-green-accent bg-green-accent/5 p-8 text-center">
                    <p className="font-display font-bold text-xl text-green-primary mb-2">
                      Application Received
                    </p>
                    <p className="text-sm font-body text-neutral-mid mb-6">
                      Thank you, {form.name}. We&apos;ll review your CV and
                      contact you at {form.email} if your profile matches this
                      opening.
                    </p>
                    <Link
                      href="/career"
                      className="inline-flex items-center text-sm font-body font-semibold text-green-accent hover:gap-2 transition-all">
                      Browse More Positions →
                    </Link>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="block text-xs font-body font-semibold text-neutral-dark mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full pb-2 text-sm font-body text-neutral-dark border-b border-neutral-mid outline-none focus:border-green-accent transition-colors bg-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-body font-semibold text-neutral-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full pb-2 text-sm font-body text-neutral-dark border-b border-neutral-mid outline-none focus:border-green-accent transition-colors bg-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-body font-semibold text-neutral-dark mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full pb-2 text-sm font-body text-neutral-dark border-b border-neutral-mid outline-none focus:border-green-accent transition-colors bg-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-body font-semibold text-neutral-dark mb-2">
                        Upload CV (.pdf, .doc, .docx) *
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                          setForm({ ...form, cv: e.target.files?.[0] || null })
                        }
                        className="w-full text-sm font-body text-neutral-mid file:mr-4 file:py-2 file:px-4 file:border file:border-divider file:text-sm file:font-body file:bg-surface-light file:text-neutral-mid hover:file:bg-gray-200 transition-colors cursor-pointer"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-primary text-white text-sm font-body font-medium py-3.5 transition-colors duration-150 hover:bg-green-primary-hover">
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      {(prevJob || nextJob) && (
        <section className="bg-surface-light py-12 border-t border-divider">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="text-xs font-body font-semibold text-neutral-mid mb-6 uppercase tracking-wider">
              More Positions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevJob && (
                <Link href={`/career/${prevJob.id}`}>
                  <motion.div
                    whileHover={{ x: -8 }}
                    className="border border-divider p-6 hover:border-neutral-dark transition-colors cursor-pointer">
                    <p className="text-xs font-body text-neutral-mid mb-2">
                      ← Previous Position
                    </p>
                    <p className="font-display font-bold text-neutral-dark">
                      {prevJob.title}
                    </p>
                  </motion.div>
                </Link>
              )}
              {nextJob && (
                <Link href={`/career/${nextJob.id}`}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="border border-divider p-6 hover:border-neutral-dark transition-colors cursor-pointer md:ml-auto">
                    <p className="text-xs font-body text-neutral-mid mb-2">
                      Next Position →
                    </p>
                    <p className="font-display font-bold text-neutral-dark">
                      {nextJob.title}
                    </p>
                  </motion.div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
