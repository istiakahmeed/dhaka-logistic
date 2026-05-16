"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  const handleSmoothScroll = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className='fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6'
      animate={{
        backgroundColor: isScrolled
          ? "rgba(15, 17, 16, 0.95)"
          : "rgba(15, 17, 16, 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: isScrolled
          ? "rgba(42, 48, 40, 1)"
          : "rgba(42, 48, 40, 0)",
        borderBottomWidth: isScrolled ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <a
          href='#'
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className='font-condensed font-black text-xl uppercase tracking-wider cursor-pointer group'
        >
          <span className='text-white-brand'>DHAKA</span>
          <span className='text-green-brand ml-2'>LOGISTICS</span>
        </a>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex gap-8'>
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(link.href);
              }}
              className='text-white-dim hover:text-green-brand transition-colors font-barlow text-sm font-medium'
              whileHover={{ color: "#6dbe45" }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMobileMenuOpen ? (
            <X size={24} className='text-green-brand' />
          ) : (
            <Menu size={24} className='text-white-brand' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className='md:hidden overflow-hidden'
      >
        <div className='flex flex-col gap-4 pt-4 pb-2'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(link.href);
              }}
              className='text-white-dim hover:text-green-brand transition-colors font-barlow text-sm font-medium'
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
