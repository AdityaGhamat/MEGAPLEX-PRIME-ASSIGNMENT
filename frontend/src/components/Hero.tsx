import React from "react";
import { ArrowRight } from "lucide-react";
import type { HeroProps } from "./types";

const Hero: React.FC<HeroProps> = ({ data }) => {
  const {
    title = "INFINITY",
    subtitle = "THINKING OF A FANTASTIC VICINITY?",
    price1 = "SMART 1 BHK 69.99 Lacs",
    price2 = "PREMIUM 2 BHK 96.99 Lacs",
    bgImage = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  } = data || {};

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-brand-dark/90" />

      <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
        <p className="text-lg md:text-xl font-light tracking-[0.3em] uppercase mb-4 text-brand-accent">
          {subtitle}
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-12 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60">
          {title}
        </h1>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
          {[price1, price2].map((price, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl w-full md:w-1/2 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">
                {price.split(" ").slice(0, 3).join(" ")}
              </h3>
              <p className="text-3xl font-extrabold text-brand-accent mb-6">
                {price.split(" ").slice(3).join(" ")}
              </p>
              <button className="w-full py-3 rounded-xl bg-white text-brand-dark font-bold flex items-center justify-center gap-2 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                View Plan <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
