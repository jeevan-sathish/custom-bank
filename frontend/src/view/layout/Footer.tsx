import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-orange-400">MyApp</h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              A simple and modern application built with React, TypeScript and
              modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Navigation</h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="transition hover:text-orange-400">
                Home
              </Link>

              <Link
                to="/dashboard"
                className="transition hover:text-orange-400"
              >
                Dashboard
              </Link>

              <Link to="/auth" className="transition hover:text-orange-400">
                Sign In / Sign Up
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Connect</h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <p>📧 support@example.com</p>
              <p>📍 India</p>

              <div className="mt-2 flex gap-4">
                <a href="#" className="transition hover:text-orange-400">
                  GitHub
                </a>

                <a href="#" className="transition hover:text-orange-400">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
