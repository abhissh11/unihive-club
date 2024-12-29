import React from "react";
import SectionHeader from "../components/FeatureCard";
import FeatureCard from "../components/SectionHeader";

export default function CommunityPage() {
  return (
    <div className="bg-indigo-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-8 bg-gradient-to-r from-indigo-500 to-indigo-700 dark:from-indigo-800 dark:to-indigo-900 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold font-serif mb-6">
          Welcome to the <span className="text-yellow-300">UniHive Community</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl">
          Connect, collaborate, and grow with like-minded tech enthusiasts.
        </p>
        <button className="px-8 py-4 bg-yellow-400 text-indigo-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Explore Discussions
        </button>
      </section>

      {/* Featured Discussions */}
      <section className="py-16 px-8">
        <SectionHeader title="Featured Discussions" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {discussions.map((discussion, index) => (
            <FeatureCard key={index} {...discussion} />
          ))}
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <footer className="py-12 text-center bg-gradient-to-r from-indigo-700 to-indigo-900 dark:from-gray-900 dark:to-gray-800 text-white">
        <p className="text-xl mb-6">Ready to join the discussion?</p>
        <button className="px-8 py-4 bg-yellow-500 text-indigo-900 font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
          Get Started
        </button>
      </footer>
    </div>
  );
}

// Mock Data for Discussions
const discussions = [
  { title: "Tech Trends", description: "Explore the latest in tech!", icon: "📚" },
  { title: "React vs. Angular", description: "Which framework wins?", icon: "🚀" },
  { title: "AI Innovation", description: "How AI is shaping the future.", icon: "🤖" },
];
