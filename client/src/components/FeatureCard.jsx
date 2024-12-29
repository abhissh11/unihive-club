export default function FeatureCard({ icon, title, description }) {
    return (
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
        <div className="text-5xl mb-6">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    );
  }