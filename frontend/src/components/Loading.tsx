import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-4 animate-pulse">
          Megaplex<span className="text-brand-accent">Prime</span>
        </h2>

        <div className="flex items-center gap-3 text-gray-400">
          <Loader2 className="animate-spin text-brand-accent" size={24} />
          <span className="text-sm font-medium tracking-widest uppercase italic">
            Preparing your luxury experience
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 text-gray-300 text-xs tracking-tighter uppercase">
        Megaplex Prime © 2026
      </div>
    </div>
  );
};

export default Loading;
