import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900">
      <div className="container-custom py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text">
              <span className="font-poppins">Nabin Shrestha</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Full Stack Developer with expertise in Node.js, React, and
              serverless architectures. Building scalable, high-performing
              applications with a focus on user experience.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/nabinstha1234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ErNabinShrestha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:shresthanabin94@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <div className="font-medium text-white">
                  Bachelor in Computer Engineering
                </div>
                <div>Everest Engineering College, Pokhara University</div>
                <div>2021 | GPA: 3.47/4.0</div>
              </li>
              <li className="text-gray-400">
                <div className="font-medium text-white">
                  Diploma in Electrical Engineering
                </div>
                <div>Nepal Polytechnic Institute, CTEVT</div>
                <div>2016 | Grade: 85.77%</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nabin Shrestha. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
