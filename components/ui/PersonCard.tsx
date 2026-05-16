interface PersonCardProps {
  name: string;
  designation: string;
  initials: string;
  phone: string;
  email: string;
}

export function PersonCard({
  name,
  designation,
  initials,
  phone,
  email,
}: PersonCardProps) {
  return (
    <div className='bg-charcoal-card border border-charcoal-border p-6 rounded-lg'>
      {/* Avatar */}
      <div className='w-14 h-14 bg-green-brand rounded-full flex items-center justify-center mb-4'>
        <p className='font-condensed font-black text-charcoal text-lg'>
          {initials}
        </p>
      </div>

      {/* Name */}
      <h3 className='font-condensed font-bold text-white-brand uppercase mb-1'>
        {name}
      </h3>

      {/* Designation */}
      <p className='text-xs text-green-brand font-condensed font-bold tracking-widest uppercase mb-3'>
        {designation}
      </p>

      {/* Contact info */}
      <div className='space-y-2 text-sm text-white-dim font-barlow'>
        <p>
          <a
            href={`tel:${phone}`}
            className='hover:text-green-brand transition-colors'
          >
            {phone}
          </a>
        </p>
        <p>
          <a
            href={`mailto:${email}`}
            className='hover:text-green-brand transition-colors break-all'
          >
            {email}
          </a>
        </p>
      </div>
    </div>
  );
}
