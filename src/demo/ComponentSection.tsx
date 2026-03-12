type PropsComponentSection = {
  title: string;
  description?: string;
  children: React.ReactNode; // любой React-контент
};

function ComponentSection({
  title,
  description,
  children,
}: PropsComponentSection) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </section>
  );
}

export default ComponentSection;
