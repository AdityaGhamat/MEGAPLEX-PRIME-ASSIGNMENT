import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Updates from "../components/Updates";
import Faq from "./Faq";
import Loading from "../components/Loading";
import { Loader2 } from "lucide-react";
import SEO from "./Seo";

const Home = () => {
  const {
    data: content,
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["content"],
    queryFn: api.getContent,
  });

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="h-screen flex items-center justify-center text-red-500 font-bold">
        Failed to load the experience. Please try refreshing.
      </div>
    );

  const pageTitle = content?.hero?.title
    ? `${content.hero.title} - Luxury Living`
    : "Luxury Apartments";

  const pageDescription =
    content?.about?.description ||
    "Experience premium living at Megaplex Prime.";
  const pageImage = content?.hero?.bgImage;

  return (
    <div className="relative">
      <SEO title={pageTitle} description={pageDescription} image={pageImage} />

      {isFetching && !isLoading && (
        <div className="fixed top-20 right-5 z-9999 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg border border-brand-accent/20 flex items-center gap-2 animate-in fade-in slide-in-from-right-5">
          <Loader2 className="animate-spin text-brand-accent" size={16} />
          <span className="text-[10px] uppercase font-bold text-brand-dark pr-2">
            Syncing Live
          </span>
        </div>
      )}

      <Navbar />
      <Hero data={content?.hero} />
      <About data={content?.about} />
      <Features data={content?.amenities} />
      <Updates data={content?.updates} />
      <Faq data={content?.faq} />

      <footer className="bg-brand-dark text-white py-10 text-center">
        <p>{content?.footer?.copyright || "© 2026 Megaplex Prime"}</p>
      </footer>
    </div>
  );
};

export default Home;
