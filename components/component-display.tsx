function ComponentDisplay({ children }: { children: React.ReactNode }) {
  return (
    <div className='py-24 border grid justify-center items-center rounded-2xl shadow-inner bg-primary-foreground'>
      {children}
    </div>
  );
}

export default ComponentDisplay;
