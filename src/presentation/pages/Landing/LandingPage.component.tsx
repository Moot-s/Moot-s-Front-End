import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChevronDownIcon from "../../icons/ChevronDownIcon/ChevronDownIcon.component";
import ChevronUpIcon from "../../icons/ChevronUpIcon/ChevronUpIcon.component";
import Navbar from "./components/Navbar/Navbar.component";
import AboutEmotions from "./pages/AboutEmotions/AboutEmotions.component";
import Features from "./pages/Features/Features.component";
import HeroBanner from "./pages/HeroBanner/HeroBanner.component";

export default function LandingPage() {
  const pages = [<HeroBanner key="hero" />, <Features key="features" />, <AboutEmotions key="about" />];
  const [pageIndex, setPageIndex] = useState(0);
  const isScrolling = useRef(false);

  const handleNextPage = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      if (e.deltaY > 0) {
        handleNextPage();
      } else if (e.deltaY < 0) {
        handlePreviousPage();
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800); 
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [pageIndex]);

  return (
    <div className="font-wobbles relative h-screen overflow-hidden">
      <Navbar currentPage={pageIndex} setPageIndex={setPageIndex} />

      <AnimatePresence mode="wait">
        <motion.div
          key={pageIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {pages[pageIndex]}
        </motion.div>
      </AnimatePresence>

      {pageIndex < pages.length - 1 && (
        <a onClick={handleNextPage}>
          <ChevronDownIcon className="w-8 h-8 lg:absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce cursor-pointer hidden" />
        </a>
      )}

      {pageIndex > 0 && (
        <a onClick={handlePreviousPage}>
          <ChevronUpIcon className="w-8 h-8 rotate-180 lg:absolute top-20 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce cursor-pointer hidden" />
        </a>
      )}
    </div>
  );
}
