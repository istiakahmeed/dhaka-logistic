import { motion } from "framer-motion";

interface ClientItemProps {
  name: string;
  sector: string;
}

export function ClientItem({ name, sector }: ClientItemProps) {
  return (
    <motion.div
      className='group bg-charcoal border border-charcoal-border hover:bg-charcoal-card transition-colors duration-300 p-6 flex items-center justify-between'
      whileHover={{ y: -2 }}
    >
      <div className='flex items-center gap-3'>
        <div className='w-2 h-2 bg-green-brand rounded-full' />
        <p className='font-barlow font-medium text-white-brand group-hover:text-green-brand transition-colors'>
          {name}
        </p>
      </div>
      <p className='text-xs text-white-dim font-condensed font-bold tracking-widest uppercase'>
        {sector}
      </p>
    </motion.div>
  );
}
