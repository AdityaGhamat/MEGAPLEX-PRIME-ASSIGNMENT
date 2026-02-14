import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQProps } from "./types";

const Faq: React.FC<FAQProps> = ({ data }) => {
  const { heading = "Frequently Asked Questions", questions = [] } = data || {};
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            {heading}
          </h2>
          <div className="h-1.5 w-20 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {questions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-transparent hover:border-brand-accent/20 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className={`font-bold text-lg ${
                    openIndex === idx ? "text-brand-accent" : "text-brand-dark"
                  }`}
                >
                  {item.q}
                </span>
                {openIndex === idx ? (
                  <Minus className="text-brand-accent shrink-0" />
                ) : (
                  <Plus className="text-gray-400 shrink-0" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
