export default function SectionHeading({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-10 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-primary-text">{children}</h2>
      <span className="block w-14 h-1 bg-secondary-text mx-auto mt-3 rounded-full" />
      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
