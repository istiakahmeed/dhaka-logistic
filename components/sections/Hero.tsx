"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Stat, CompanyData } from "@/types/dlss";

interface HeroProps {
  company: CompanyData;
  stats: Stat[];
}

export function Hero({ company, stats }: HeroProps) {
  return (
    <section
      id='hero'
      className='relative min-h-screen bg-charcoal pt-32 pb-20 px-6 md:px-12 overflow-hidden'
    >
      {/* Grid background */}
      <div
        className='absolute inset-0 opacity-40'
        style={{
          backgroundImage:
            "linear-gradient(rgba(109, 190, 69, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109, 190, 69, 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Right diagonal panel */}
      <div
        className='absolute right-0 top-0 bottom-0 w-1/2 bg-charcoal-mid opacity-50'
        style={{
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <div className='relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]'>
        {/* Left Content */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          className='z-10'
        >
          {/* Tag */}
          <motion.p
            variants={fadeUp}
            className='text-xs font-bold tracking-[0.2em] uppercase text-green-brand mb-6'
          >
            Est. {company.established} • {company.tagline}
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className='font-condensed font-black text-6xl md:text-7xl uppercase leading-none text-white-brand mb-6'
          >
            One <span className='text-green-brand'>SINGLE</span> <br />
            Point of <br />
            Contact
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className='text-white-dim font-barlow leading-relaxed max-w-md mb-8'
          >
            {company.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className='flex flex-col sm:flex-row gap-4 mb-12'
          >
            <button
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className='bg-green-brand text-charcoal font-condensed font-bold py-3 px-8 uppercase tracking-wider hover:bg-green-dark transition-colors'
            >
              Explore Services
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className='border-2 border-green-brand text-green-brand font-condensed font-bold py-3 px-8 uppercase tracking-wider hover:bg-green-brand hover:text-charcoal transition-colors'
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className='grid grid-cols-2 md:grid-cols-4 gap-4'
          >
            {stats.map((stat, idx) => (
              <div key={idx} className='border-l-2 border-green-brand pl-4'>
                <p className='font-condensed font-black text-3xl text-green-brand'>
                  {stat.value}
                </p>
                <p className='text-xs text-white-dim font-barlow'>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='hidden lg:flex items-center justify-center'
        >
          <div className='text-center'>
            <div className='text-8xl font-condensed font-black text-green-glow opacity-30 leading-none mb-4'>
              2,234+
            </div>
            <p className='text-white-dim text-lg font-barlow'>
              Deployed Resources Nationwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
