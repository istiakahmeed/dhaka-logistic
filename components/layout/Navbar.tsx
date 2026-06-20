"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/capability", label: "Capability" },
  { href: "/career", label: "Career" },
  { href: "/gallery", label: "Gallery" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDark = isScrolled;

  return (
    <motion.nav
      className='fixed top-0 left-0 right-0 z-50 h-[68px]'
      initial={false}
      animate={{
        // backgroundColor: showDark ? "#1a4d2e" : "#ffffff",
        // borderBottomColor: showDark ? "rgba(255,255,255,0.08)" : "#e2e2de",
        backgroundColor: showDark ? "#ffffff" : "#ffffff",
        borderBottomColor: showDark ? "#e2e2de" : "#e2e2de",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        borderBottomWidth: 1,
        backdropFilter: showDark ? "blur(12px)" : "none",
      }}
    >
      <div className='max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between'>
        <Link href='/' className='shrink-0'>
          <Image
            src='/dlsLogo.png'
            alt='Dhaka Logistics Services & Solution'
            width={140}
            height={35}
            className='h-14 w-full'
          />
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-body font-medium transition-colors duration-100 hover:text-green-accent'
              style={{
                //  color: showDark ? "#ffffff" : "#4a4a4a"
                color: showDark ? "#4a4a4a" : "#4a4a4a",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/contact'
            className='bg-green-primary text-white text-sm font-body font-medium px-5 py-2.5 no-underline transition-colors duration-150 hover:bg-green-primary-hover'
          >
            Get In Touch
          </Link>
        </div>

        <button
          className='md:hidden'
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label='Toggle menu'
        >
          {isMobileOpen ? (
            <X size={20} color={showDark ? "#ffffff" : "#1a4d2e"} />
          ) : (
            <Menu size={20} color={showDark ? "#ffffff" : "#1a4d2e"} />
          )}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isMobileOpen ? "auto" : 0,
          opacity: isMobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className='md:hidden overflow-hidden bg-white border-b border-divider'
      >
        <div className='flex flex-col gap-4 px-6 py-4'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-neutral-mid text-sm font-body font-medium'
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/contact'
            className='bg-green-primary text-white text-sm font-body font-medium px-5 py-2.5 text-center'
            onClick={() => setIsMobileOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
