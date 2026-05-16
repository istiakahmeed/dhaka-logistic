"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const trustClients = [
  "BATB",
  "Berger",
  "Grameenphone",
  "Standard Chartered",
  "Novo Nordisk",
  "Daraz",
  "Roche",
];

const clientLogos: Record<string, string> = {
  BATB: "/client-logo/BATB.png",
  Berger: "/client-logo/bergerlogo.svg",
  Grameenphone: "/client-logo/Grameenphone.png",
  "Standard Chartered": "/client-logo/scb.png",
  "Novo Nordisk": "/client-logo/novo_nordisk.png",
  Daraz: "/client-logo/Daraz-logo.png",
  Roche: "/client-logo/Roche.png",
};

export function Hero() {
  return (
    <section className='relative min-h-screen bg-white'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-0 grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 items-center min-h-[calc(100vh-80px)]'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          className='z-10'
        >
          <motion.p
            variants={fadeUp}
            className='text-xs font-body font-semibold tracking-[0.25em] uppercase text-green-accent mb-5'
          >
            Dhaka Logistics Services & Solution
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className='font-display font-extrabold text-neutral-dark leading-[1.05] mb-6'
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            One Point
            <br />
            of Contact.
            <br />
            Every Operation
            <br />
            Covered.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className='text-[17px] font-body text-neutral-mid leading-relaxed max-w-[480px] mb-8'
          >
            Since 2010, DLSS has been the operational backbone for
            Bangladesh&apos;s most demanding enterprises — from HR outsourcing
            to facility management, engineering to fleet telematics.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className='flex flex-col sm:flex-row gap-4'
          >
            <Link
              href='/services'
              className='inline-flex items-center bg-green-primary text-white font-body font-medium text-sm px-6 py-3.5 transition-colors duration-150 hover:bg-green-primary-hover'
            >
              Explore Our Services
            </Link>
            <Link
              href='/clients'
              className='inline-flex items-center gap-2 text-green-accent font-body font-medium text-sm transition-colors duration-150 hover:text-green-primary group'
            >
              View Our Clients
              <ArrowRight
                size={16}
                className='transition-transform duration-150 group-hover:translate-x-0.5'
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='hidden lg:grid grid-cols-[1.2fr_0.8fr] grid-rows-[1fr_1fr] gap-3 h-[520px]'
        >
          <div className='relative row-span-2 overflow-hidden'>
            <Image
              src='/services/Human-Resource.jpg'
              alt='DLSS Operations'
              fill
              className='object-cover'
              sizes='30vw'
            />
          </div>
          <div className='bg-green-primary relative overflow-hidden'>
            <Image
              src='/services/Logistics-Services&Solutions.jpg'
              alt='DLSS Logistics'
              fill
              className='object-cover'
              sizes='15vw'
            />
          </div>
          <div className='bg-green-accent relative overflow-hidden'>
            <Image
              src='/services/Engineering&Construction.jpg'
              alt='DLSS Engineering'
              fill
              className='object-cover'
              sizes='15vw'
            />
          </div>
          <div className='bg-green-primary/40 relative overflow-hidden'>
            <Image
              src='/services/Event-Management.jpg'
              alt='DLSS Events'
              fill
              className='object-cover'
              sizes='15vw'
            />
          </div>
        </motion.div>
      </div>

      <div className='bg-surface-light border-y border-divider'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 h-[80px] flex items-center justify-between gap-8 overflow-x-auto'>
          <span className='text-xs font-body font-semibold uppercase tracking-widest text-neutral-mid shrink-0'>
            Trusted by
          </span>
          {trustClients.map((name) => {
            const logo = clientLogos[name];
            return logo ? (
              <div
                key={name}
                className='relative w-16 h-8 shrink-0 transition-all duration-200 hover:scale-110'
                style={{ opacity: 0.9, filter: "saturate(0.8)" }}
              >
                <Image
                  src={logo}
                  alt={name}
                  fill
                  className='object-contain'
                  sizes='10vw'
                />
              </div>
            ) : (
              <span
                key={name}
                className='text-sm font-body font-semibold text-gray-400 transition-colors duration-150 hover:text-green-primary shrink-0'
              >
                {name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
