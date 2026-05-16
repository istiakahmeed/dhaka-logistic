import { motion } from "framer-motion";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  subServices: string[];
}

export function ServiceCard({
  id,
  title,
  description,
  subServices,
}: ServiceCardProps) {
  return (
    <motion.div
      className='relative group bg-charcoal border border-charcoal-border hover:bg-charcoal-card transition-colors duration-300 p-8'
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Animated left border */}
      <motion.div
        className='absolute left-0 top-0 bottom-0 w-[3px] bg-green-brand'
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ originY: 0 }}
      />

      {/* Faded number */}
      <div className='text-7xl font-condensed font-black text-white-faint group-hover:text-white-dim transition-colors duration-300 mb-4'>
        {id}
      </div>

      {/* Title */}
      <h3 className='font-condensed font-bold text-xl uppercase text-white-brand mb-3'>
        {title}
      </h3>

      {/* Description */}
      <p className='text-white-dim font-barlow leading-relaxed mb-4'>
        {description}
      </p>

      {/* Sub-services - fade in on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='space-y-2 pt-4 border-t border-charcoal-border'
      >
        {subServices.map((service, idx) => (
          <p key={idx} className='text-xs text-white-faint font-barlow'>
            • {service}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
}
