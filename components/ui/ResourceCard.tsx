import { motion } from "framer-motion";

interface ResourceCardProps {
  value: string;
  label: string;
}

export function ResourceCard({ value, label }: ResourceCardProps) {
  return (
    <motion.div
      className='bg-charcoal-card border border-charcoal-border p-8 text-center'
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p className='font-condensed font-black text-5xl text-green-brand mb-2'>
        {value}
      </p>
      <p className='text-white-dim font-barlow text-sm'>{label}</p>
    </motion.div>
  );
}
