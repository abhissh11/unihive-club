export default function SectionHeader({ title, subtitle }) {
    return (
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-700 dark:text-gray-300">{subtitle}</p>}
      </div>
    );
  }