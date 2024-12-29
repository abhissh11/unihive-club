import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-20">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-8 bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-800 dark:to-purple-900 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold font-serif mb-6">
          About <span className="text-yellow-300">UniHive</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl">
          UniHive is your ultimate hub for tech resources, hackathons, and vibrant communities, fostering innovation and collaboration.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We aim to empower students and tech enthusiasts by providing access to quality resources, inspiring hackathons, and thriving communities that promote growth, learning, and innovation.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-8 bg-gray-100 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            To become the go-to platform where tech enthusiasts can unlock their full potential by bridging the gap between academia and professional success.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-3">Inclusivity</h3>
              <p>We believe in equal opportunities and creating a space where everyone can thrive.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p>Encouraging creative problem-solving and continuous learning to stay ahead in tech.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
              <p>Fostering teamwork and networking to build stronger communities and better solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="py-12 text-center bg-gradient-to-r from-purple-600 to-purple-800 dark:from-gray-900 dark:to-gray-800 text-white">
        <p className="text-xl mb-6">Join UniHive and start your journey today!</p>
        <button className="px-8 py-4 bg-yellow-500 text-purple-900 font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
          Get Started
        </button>
      </footer>
    </div>
  );
}
