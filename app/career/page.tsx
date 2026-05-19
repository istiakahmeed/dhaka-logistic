"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import dlssData from "@/data/dlss-data.json";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function CareerPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const jobPosts = dlssData.jobPosts;

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section ref={ref} className="bg-green-primary pt-[140px] pb-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12 ">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display font-extrabold text-gray-100 leading-[1.05] text-[40px] md:text-[56px] lg:text-[64px] max-w-3xl ">
            Join Our
            <br />
            Team.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-[17px] font-body text-green-accent leading-relaxed max-w-[540px] mt-6">
            Explore current openings. Apply for a role that matches your skills
            and aspirations.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-[96px] md:py-[120px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobPosts.map((job, index) => {
              const isActive = job.active !== false;
              return (
                <Link key={job.id} href={`/career/${job.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    className={`border p-8 transition-all duration-200 cursor-pointer group relative ${
                      isActive
                        ? "border-divider hover:bg-green-primary hover:text-white hover:border-green-primary"
                        : "border-divider bg-gray-50 opacity-70 hover:opacity-90"
                    }`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p
                          className={`text-xs font-body font-semibold mb-2 ${
                            isActive
                              ? "text-green-accent group-hover:text-white"
                              : "text-gray-500"
                          }`}>
                          {job.department}
                        </p>
                        <h3
                          className={`font-display font-bold text-lg md:text-xl transition-colors ${
                            isActive
                              ? "text-neutral-dark group-hover:text-white"
                              : "text-neutral-mid"
                          }`}>
                          {job.title}
                        </h3>
                      </div>
                      <span
                        className={`font-display font-bold text-sm md:text-base ${
                          isActive
                            ? "text-green-accent group-hover:text-green-accent"
                            : "text-gray-400"
                        }`}>
                        {job.id}
                      </span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <p
                        className={`text-xs font-body uppercase tracking-wide ${
                          isActive
                            ? "text-neutral-mid group-hover:text-gray-300"
                            : "text-gray-400"
                        }`}>
                        {job.location} • {job.type}
                      </p>
                      <p
                        className={`text-sm font-body line-clamp-2 ${
                          isActive
                            ? "text-neutral-mid group-hover:text-gray-300"
                            : "text-gray-400"
                        }`}>
                        {job.description}
                      </p>
                    </div>

                    <div
                      className={`flex items-center text-xs font-body font-semibold ${
                        isActive
                          ? "text-green-accent group-hover:text-green-accent"
                          : "text-gray-400"
                      }`}>
                      {isActive ? (
                        <>
                          View Details
                          <span className="ml-2 group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </>
                      ) : (
                        <div className="">
                          <div>
                            Not Accepting Applications
                            <span className="ml-2">✕</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
