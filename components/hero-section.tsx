"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import nabin from "@/app/nabin.jpg";

const expertiseAreas = [
  "Product Engineering",
  "Waste Management",
  "IoT Solutions",
  "Data Analytics",
  "Environmental Tech",
  "Sustainable Systems",
  "Smart City Solutions",
];

export default function HeroSection() {
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const currentExpertiseRef = useRef(expertiseAreas[0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentExpertiseRef.current) {
        // Pause at complete word
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      } else if (isDeleting && displayText === "") {
        // Move to next word
        setIsDeleting(false);
        setExpertiseIndex((prev) => (prev + 1) % expertiseAreas.length);
        currentExpertiseRef.current =
          expertiseAreas[(expertiseIndex + 1) % expertiseAreas.length];
        return;
      }

      // Set typing speed
      setTypingSpeed(isDeleting ? 50 : 100);

      // Update display text
      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.substring(0, prev.length - 1);
        } else {
          return currentExpertiseRef.current.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, expertiseIndex, typingSpeed]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center section-padding pt-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              I&apos;m <span className="gradient-text">Nabin Shrestha</span>.
              <br />
              T-Shaped Product Engineer.
            </h1>

            <div className="h-16 mt-6">
              <p className="text-xl md:text-2xl text-gray-300">
                Expertise in{" "}
                <span className="text-teal-400 font-medium">{displayText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-gray-400 text-lg mt-6 max-w-xl">
              T-Shaped Product Engineer with deep expertise in Waste Management
              solutions. Combining domain knowledge with full-stack development
              to build sustainable environmental tech. Current tech stack:
              React, Node.js, Python, AWS IoT, MongoDB, and TensorFlow.
            </p>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/nabinstha1234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors bg-gray-800/50 p-3 rounded-full"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ErNabinShrestha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors bg-gray-800/50 p-3 rounded-full"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:shresthanabin94@gmail.com"
                className="text-gray-400 hover:text-white transition-colors bg-gray-800/50 p-3 rounded-full"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="tel:+8109075234135"
                className="text-gray-400 hover:text-white transition-colors bg-gray-800/50 p-3 rounded-full"
              >
                <Phone size={20} />
                <span className="sr-only">Phone</span>
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="btn-primary flex items-center justify-center"
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#projects"
                className="btn-secondary flex items-center justify-center"
              >
                View My Projects
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 animate-float group cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateY(${
                  mousePosition.x * 10
                }deg) rotateX(${-mousePosition.y * 10}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:from-teal-400/30 group-hover:to-purple-400/30 transition-all duration-300"></div>
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-white/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-[2000ms] ease-in-out"
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                ></div>
                <Image
                  src={nabin}
                  alt="Nabin Shrestha - T-Shaped Product Engineer"
                  width={500}
                  height={500}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 shadow-xl transform group-hover:scale-105 group-hover:translate-x-2 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Available for projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
