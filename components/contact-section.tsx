"use client";

import type React from "react";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Resend } from "resend";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    subject: "project",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, company, message, subject } = formData;

    const data = {
      from: email,
      to: "shresthanabin94@gmail.com",
      subject: subject,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Message: ${message}
      `,
    };

    try {
      setIsSubmitting(true);
      await resend.emails.send(data);

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }

    // Simulate form submission
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   setIsSubmitted(true);

    //   // Reset form after submission
    //   setFormData({
    //     name: "",
    //     email: "",
    //     company: "",
    //     message: "",
    //     subject: "project",
    //   });

    //   // Reset success message after 5 seconds
    //   setTimeout(() => {
    //     setIsSubmitted(false);
    //   }, 5000);
    // }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for
            collaborations or just a friendly hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            {isSubmitted ? (
              <div className="bg-teal-400/20 border border-teal-400/30 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-400/20 mb-4">
                  <Send className="h-8 w-8 text-teal-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-gray-300">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  >
                    <option value="project">Project Inquiry</option>
                    <option value="job">Job Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col">
            <div className="card mb-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-400/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Email</h4>
                    <a
                      href="mailto:shresthanabin94@gmail.com"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      shresthanabin94@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-400/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a
                      href="tel:+8109075234135"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      +81 09075234135
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-400/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-gray-400">Kitakyushu, Fukuoka, Japan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card flex-grow">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-400/20 p-3 rounded-lg">
                    <Github className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">GitHub</h4>
                    <a
                      href="https://github.com/nabinstha1234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      nabinstha1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-400/20 p-3 rounded-lg">
                    <Linkedin className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/ErNabinShrestha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      ErNabinShrestha
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <h4 className="text-lg font-medium mb-2">Languages</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">Nepali (Native)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">English (Business)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">Japanese (JLPT N3)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">Hindi (Near-Native)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
