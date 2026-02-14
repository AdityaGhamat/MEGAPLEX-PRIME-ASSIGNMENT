import React from "react";
import type { AboutProps } from "./types";

const About: React.FC<AboutProps> = ({ data }) => {
  const {
    heading = "About Project",
    description = "Megaplex Prime is a premium township offering a blend of modern architecture and lush greenery.",
  } = data || {};

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              {heading}
            </h2>
            <div className="w-20 h-1.5 bg-brand-accent rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-brand-accent pl-4">
                <h4 className="font-bold text-2xl text-brand-dark">50+</h4>
                <p className="text-sm text-gray-500">Acres of Land</p>
              </div>
              <div className="border-l-4 border-brand-accent pl-4">
                <h4 className="font-bold text-2xl text-brand-dark">2000+</h4>
                <p className="text-sm text-gray-500">Happy Families</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
                alt="Building architecture"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-brand-dark/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
