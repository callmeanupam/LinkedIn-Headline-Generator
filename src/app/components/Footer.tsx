import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-8 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-teal-600">HeadlineGen</h2>
            <p className="mt-2 text-gray-500">
              Create powerful LinkedIn headlines in seconds.
            </p>
            <p>
              Developed by{" "}
              <a className="hover:text-teal-600" href="https://anupamshakya.in">
                Anupam Shakya
              </a>
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/callmeanupam/LinkedIn-Headline-Generator"
              className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
            >
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
