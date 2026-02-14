import React from "react";
import { Waves, Dumbbell, Castle, Trees, Star } from "lucide-react";
import type { FeaturesProps } from "./types";

const iconMap: Record<string, React.ReactNode> = {
  pool: <Waves size={40} />,
  gym: <Dumbbell size={40} />,
  club: <Castle size={40} />,
  tree: <Trees size={40} />,
  default: <Star size={40} />,
};

const Features: React.FC<FeaturesProps> = ({ data }) => {
  const { heading = "World Class Amenities", items = [] } = data || {};

  return (
    <section id="amenities" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            {heading}
          </h2>
          <div className="h-1.5 w-24 bg-brand-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 text-center cursor-default border border-transparent hover:border-brand-accent/20"
            >
              <div className="text-brand-primary mb-6 flex justify-center transform group-hover:scale-110 group-hover:text-brand-accent transition-transform duration-300">
                {iconMap[item.icon] || iconMap.default}
              </div>
              <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
