import { useState } from "react";
import { Menu, Linkedin } from "lucide-react";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Linkedin className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              Headline Generator
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="flex justify-between items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors duration-300"
            >
              <GitHubLogoIcon />
              ⭐️ GitHub
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition duration-300"
            >
              Home
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
