import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Updates from "../components/Updates";
import Faq from "./Faq";

const Home = () => {
  const {
    data: content,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["content"],
    queryFn: api.getContent,
    // refetchOnWindowFocus: true,
  });

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  if (isError)
    return <div className="text-red-500 text-center">Error loading data.</div>;

  return (
    <>
      <Navbar />
      <Hero data={content?.hero} />
      <About data={content?.about} />
      <Features data={content?.amenities} />
      <Updates data={content?.updates} />
      <Faq data={content?.faq} />
      <footer className="bg-brand-dark text-white py-10 text-center">
        <p>{content?.footer?.copyright || "© 2026 Megaplex Prime"}</p>
      </footer>
    </>
  );
};

export default Home;
