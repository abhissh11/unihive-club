import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

const resources = [
  { title: 'Web Development', description: 'Master frontend and backend technologies.', icon: '🌐' },
  { title: 'Machine Learning', description: 'Explore data science and AI tools.', icon: '🤖' },
  { title: 'Cybersecurity', description: 'Learn to protect systems and data.', icon: '🔒' },
  { title: 'Cloud Computing', description: 'Dive into AWS, Azure, and GCP.', icon: '☁️' },
  { title: 'UI/UX Design', description: 'Enhance design skills for better user experience.', icon: '🎨' },
];

export default function Resources() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-8 bg-gradient-to-r from-green-400 to-green-600 dark:from-green-800 dark:to-green-900 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold font-serif mb-6">
          Explore <span className="text-yellow-300">Resources</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl">
          Access curated resources to boost your skills and stay ahead in tech.
        </p>
        <button className="px-8 py-4 bg-yellow-400 text-green-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Start Learning
        </button>
      </section>

      {/* Resources Listings */}
      <section className="py-16 px-8">
        <SectionHeader title="Tech Domains to Explore" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <FeatureCard key={index} {...resource} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <footer className="py-12 text-center bg-gradient-to-r from-green-600 to-green-800 dark:from-gray-900 dark:to-gray-800 text-white">
        <p className="text-xl mb-6">Expand your knowledge today!</p>
        <button className="px-8 py-4 bg-yellow-500 text-green-900 font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
          Browse More Resources
        </button>
      </footer>
    </div>
  );
}
