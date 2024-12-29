import React from "react";
import SectionHeader from "../components/SectionHeader";
import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-8 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-800 dark:to-blue-900 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold font-serif mb-6">
          Welcome to <span className="text-yellow-300">UniHive</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl">
          Your ultimate hub for tech resources, hackathons, and community collaboration.
        </p>
        <button className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Join the Community
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <SectionHeader title="Why Choose UniHive?" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Resource Hub"
            description="Access curated resources for various tech domains and grow your skills."
            icon="📚"
          />
          <FeatureCard
            title="Hackathons"
            description="Participate in events that inspire innovation and foster networking."
            icon="🚀"
          />
          <FeatureCard
            title="Community"
            description="Join vibrant Discord communities to discuss, collaborate, and learn."
            icon="👥"
          />
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <footer className="py-12 text-center bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white">
        <p className="text-xl mb-6">Ready to unlock your potential?</p>
        <button className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
          Get Started
        </button>
      </footer>
    </div>
  );
}
