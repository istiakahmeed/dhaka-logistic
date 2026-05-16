"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionTag, SectionTitle, Divider } from "@/components/ui";
import { PersonCard } from "@/components/ui/PersonCard";
import { CompanyData, ContactPerson } from "@/types/dlss";
import { Mail, Phone, Globe } from "lucide-react";

interface ContactProps {
  company: CompanyData;
  contacts: ContactPerson[];
  future: {
    title: string;
    description: string;
    pillars: string[];
  };
}

export function Contact({ company, contacts, future }: ContactProps) {
  return (
    <section id='contact' className='bg-charcoal py-20 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left - Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionTag>Get in Touch</SectionTag>
            </motion.div>

            <motion.div variants={fadeUp}>
              <SectionTitle>Let's Connect</SectionTitle>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Divider />
            </motion.div>

            {/* Office Addresses */}
            <motion.div variants={fadeUp} className='space-y-6 mb-8'>
              {Object.entries(company.offices).map(([key, office]) => (
                <div key={key}>
                  <p className='text-green-brand font-condensed font-bold text-xs uppercase tracking-widest mb-2'>
                    {office.label}
                  </p>
                  <p className='text-white-dim font-barlow text-sm leading-relaxed'>
                    {office.address}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              variants={fadeUp}
              className='space-y-4 pt-6 border-t border-charcoal-border'
            >
              {/* Phone */}
              <div className='flex items-start gap-3'>
                <Phone
                  size={20}
                  className='text-green-brand mt-1 flex-shrink-0'
                />
                <div>
                  <p className='text-green-brand font-condensed font-bold text-xs uppercase tracking-widest mb-1'>
                    Phone
                  </p>
                  <a
                    href={`tel:${company.phone}`}
                    className='text-white-dim hover:text-green-brand transition-colors font-barlow'
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-3'>
                <Mail
                  size={20}
                  className='text-green-brand mt-1 flex-shrink-0'
                />
                <div>
                  <p className='text-green-brand font-condensed font-bold text-xs uppercase tracking-widest mb-1'>
                    Email
                  </p>
                  <div className='space-y-1'>
                    {company.emails.map((email, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${email}`}
                        className='block text-white-dim hover:text-green-brand transition-colors font-barlow text-sm'
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className='flex items-start gap-3'>
                <Globe
                  size={20}
                  className='text-green-brand mt-1 flex-shrink-0'
                />
                <div>
                  <p className='text-green-brand font-condensed font-bold text-xs uppercase tracking-widest mb-1'>
                    Website
                  </p>
                  <a
                    href={`https://${company.website}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white-dim hover:text-green-brand transition-colors font-barlow'
                  >
                    {company.website}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Persons + Future */}
          <motion.div
            className='space-y-8'
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Contact Persons */}
            <div className='space-y-4'>
              <p className='text-green-brand font-condensed font-bold text-xs uppercase tracking-widest'>
                Key Contacts
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {contacts.map((person, idx) => (
                  <motion.div key={idx} variants={fadeUp}>
                    <PersonCard {...person} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Future Expansion */}
            <motion.div
              variants={fadeUp}
              className='bg-charcoal-card border border-charcoal-border p-6'
            >
              <p className='text-green-brand font-condensed font-bold text-xs uppercase tracking-widest mb-2'>
                {future.title}
              </p>
              <p className='text-white-dim font-barlow text-sm leading-relaxed mb-4'>
                {future.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {future.pillars.map((pillar, idx) => (
                  <span
                    key={idx}
                    className='bg-charcoal px-3 py-1 rounded border border-charcoal-border text-white-faint font-barlow text-xs'
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
