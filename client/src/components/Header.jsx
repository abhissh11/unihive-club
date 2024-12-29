import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="px-10 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold font-serif">
            <span className="text-blue-600 dark:text-blue-400">Uni</span>
            <span className="text-gray-800 dark:text-white">Hive</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 px-4 shadow-md">
          <h3>🔍</h3>
          <input
            type="text"
            className="px-3 py-2 bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 w-72"
            placeholder="Search for resources, hackathons..."
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {["Community", "Hackathons", "Resources", "About"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition duration-300"
            >
              {item}
            </Link>
          ))}
          <Link to="/profile">
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center hover:shadow-lg transition duration-300">
              <span className="text-lg font-bold text-gray-700 dark:text-gray-300">👤</span>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
