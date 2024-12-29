import React from 'react';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

const hackathons = [
  { title: 'AI Innovations', date: 'March 10, 2025', description: 'Explore AI-driven solutions.', icon: '🤖' },
  { title: 'Blockchain Hack', date: 'April 15, 2025', description: 'Build decentralized apps.', icon: '🔗' },
  { title: 'HealthTech Sprint', date: 'May 5, 2025', description: 'Innovate healthcare with tech.', icon: '⚕️' },
];

export default function Hackathons() {
  return (
    <div className="bg-indigo-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-8 bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-800 dark:to-teal-900 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold font-serif mb-6">
          Upcoming <span className="text-yellow-300">Hackathons</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl">
          Participate in innovative hackathons, collaborate with peers, and showcase your skills.
        </p>
        <button className="px-8 py-4 bg-yellow-400 text-teal-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Register Now
        </button>
      </section>

      {/* Hackathon Listings */}
      <section className="py-16 px-8">
        <SectionHeader title="Explore Hackathons" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <FeatureCard key={index} {...hackathon} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <footer className="py-12 text-center bg-gradient-to-r from-teal-700 to-teal-900 dark:from-gray-900 dark:to-gray-800 text-white">
        <p className="text-xl mb-6">Ready to innovate?</p>
        <button className="px-8 py-4 bg-yellow-500 text-teal-900 font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
          Join the Next Hackathon
        </button>
      </footer>
    </div>
  );
}
