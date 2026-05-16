"use client";

import { CompanyData } from "@/types/dlss";

interface FooterProps {
  company: CompanyData;
}

export function Footer({ company }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-charcoal-mid border-t border-charcoal-border py-8 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
        {/* Logo */}
        <div className='font-condensed font-black text-lg uppercase tracking-wider'>
          <span className='text-white-brand'>{company.shortName}</span>
        </div>

        {/* Copyright */}
        <p className='text-white-dim text-sm font-barlow text-center md:text-right'>
          © {currentYear} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
