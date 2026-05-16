export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-[11px] font-bold tracking-[0.2em] uppercase text-green-brand mb-3'>
      {children}
    </p>
  );
}
