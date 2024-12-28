import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-10 flex items-center justify-around border-b p-4">
      <div className="">
        <Link to="/">
          <h1 className="text-2xl font-bold font-serif">
            <span className="text-blue-600">Uni</span>Hive
          </h1>
        </Link>
      </div>
      <div className="rounded-full border border-black pl-4 flex justify-between items-center">
        <h3>🔍</h3>
        <input
          className="px-3 py-3   rounded-full w-72  outline-none"
          placeholder="Search for resources, hackathons.."
        />
      </div>
      <ul className="flex gap-8">
        <Link to="/community" className="text-lg font-normal">
          Community
        </Link>
        <Link to="/hackathons" className="text-lg font-normal">
          Hackathons
        </Link>
        <Link to="/resources" className="text-lg font-normal">
          Resources
        </Link>
        <Link to="/about" className="text-lg font-normal">
          About
        </Link>
      </ul>
    </div>
  );
}
