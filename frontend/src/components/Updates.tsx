import React from "react";
import type { UpdatesProps } from "./types";

const Updates: React.FC<UpdatesProps> = ({ data }) => {
  const { heading = "Construction Updates", updates = [] } = data || {};

  return (
    <section id="updates" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-16 text-center">
          {heading}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {updates.map((update, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-4/5 overflow-hidden bg-gray-200">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
                      update.status === "Completed"
                        ? "bg-emerald-500 text-white"
                        : "bg-amber-400 text-black"
                    }`}
                  >
                    {update.status}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {update.title}
                  </h3>
                  <div className="h-1 w-12 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;
