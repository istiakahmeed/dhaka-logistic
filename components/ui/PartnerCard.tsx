import { motion } from "framer-motion";

interface PartnerCardProps {
  name: string;
  domain: string;
  description: string;
}

export function PartnerCard({ name, domain, description }: PartnerCardProps) {
  return (
    <motion.div
      className='bg-charcoal-card border border-charcoal-border p-8'
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h3 className='font-condensed font-black text-2xl uppercase text-green-brand mb-2'>
        {name}
      </h3>
      <p className='text-xs text-white-dim font-condensed font-bold tracking-widest uppercase mb-3'>
        {domain}
      </p>
      <p className='text-white-dim font-barlow leading-relaxed'>
        {description}
      </p>
    </motion.div>
  );
}
