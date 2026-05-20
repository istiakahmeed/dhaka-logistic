import { data } from "@/lib/data";
import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/capability", label: "Capability" },
  { href: "/career", label: "Career" },
];

const serviceLinks = [
  { href: "/services", label: "HR Outsourcing" },
  { href: "/services", label: "Payroll" },
  { href: "/services", label: "IR Consultancy" },
  { href: "/services", label: "Logistics" },
  { href: "/services", label: "VTS" },
  { href: "/services", label: "Engineering" },
  { href: "/services", label: "Events" },
  { href: "/services", label: "Facility Management" },
];

export function Footer() {
  const { company } = data;

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            {/* <Image
              src="/dlsLogo.png"
              alt="Dhaka Logistics Services & Solution"
              width={140}
              height={35}
              className="h-auto w-full"
            /> */}
            <p className="text-3xl font-bold">
              Dhaka <span className="text-green-accent">Logistics</span>
            </p>
            <p className="text-sm mt-3 font-body text-gray-400 leading-relaxed mb-6">
              Your single point of contact for every operational need.
            </p>
            <div className="flex gap-3">
              <a
                href={company.social[0]?.url || "#"}
                className="w-8 h-8 flex items-center justify-center border border-gray-600 text-gray-400 hover:border-green-accent hover:text-green-accent transition-colors text-xs"
                aria-label="LinkedIn">
                in
              </a>
              <a
                href={company.social[1]?.url || "#"}
                className="w-8 h-8 flex items-center justify-center border border-gray-600 text-gray-400 hover:border-green-accent hover:text-green-accent transition-colors text-xs"
                aria-label="Facebook">
                f
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-green-accent mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-green-accent mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-green-accent mb-5">
              Contact
            </h4>
            <div className="text-sm font-body text-gray-400 space-y-2 leading-relaxed">
              <p>
                <span className="text-white font-medium">Corporate Office</span>
                <br />
                {company.offices.corporate.address}
              </p>
              <p className="pt-2">
                Tel: {company.phone}
                <br />
                {company.emails[0]}
                <br />
                {company.website}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs font-body text-gray-500">
            All rights reserved By &copy; {new Date().getFullYear()}{" "}
            <span className="text-green-accent">
              Dhaka Logistics Services & Solution.
            </span>
          </p>
          <p className="text-xs font-body text-gray-500">
            Developed By{" "}
            <a
              href="https://www.stellarworm.com/"
              target="_blank"
              className="text-green-accent hover:underline">
              Stellar Worm
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
