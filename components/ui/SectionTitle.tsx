export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='font-condensed font-black text-5xl md:text-6xl uppercase leading-none text-white-brand mb-3'>
      {children}
    </h2>
  );
}
