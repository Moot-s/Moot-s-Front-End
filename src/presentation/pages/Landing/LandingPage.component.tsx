import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ChevronDownIcon from "../../icons/ChevronDownIcon/ChevronDownIcon.component";
import ChevronUpIcon from "../../icons/ChevronUpIcon/ChevronUpIcon.component";
import Navbar from "./components/Navbar/Navbar.component";
import AboutEmotions from "./pages/AboutEmotions/AboutEmotions.component";
import Features from "./pages/Features/Features.component";
import HeroBanner from "./pages/HeroBanner/HeroBanner.component";

export default function LandingPage() {
  const [pageIndex, setPageIndex] = useState(0);
  const isScrolling = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const sectionRefs = [heroRef, featuresRef, aboutRef];

  const pages = [
    <HeroBanner key="hero" />,
    <Features key="features" />,
    <AboutEmotions key="about" />,
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      if (e.deltaY > 0 && pageIndex < pages.length - 1) {
        setPageIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && pageIndex > 0) {
        setPageIndex((prev) => prev - 1);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [pageIndex, isMobile]);

  const handleSetPageIndex = (index: number) => {
    if (isMobile) {
      sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setPageIndex(index);
    }
  };

  if (isMobile) {
    return (
      <div className="font-wobbles relative h-screen overflow-hidden">
        <Navbar currentPage={pageIndex} setPageIndex={handleSetPageIndex} />
        <div className="overflow-auto h-full pt-16">
          <div className="flex flex-col">
            <div ref={heroRef} className="min-h-screen">
              {pages[0]}
            </div>
            <div ref={featuresRef} className="min-h-screen">
              {pages[1]}
            </div>
            <div ref={aboutRef} className="min-h-screen">
              {pages[2]}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-wobbles relative h-screen overflow-hidden">
      <Navbar currentPage={pageIndex} setPageIndex={handleSetPageIndex} />

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
        <a onClick={() => setPageIndex((prev) => prev + 1)}>
          <ChevronDownIcon className="w-8 h-8 lg:absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce cursor-pointer" />
        </a>
      )}

      {pageIndex > 0 && (
        <a onClick={() => setPageIndex((prev) => prev - 1)}>
          <ChevronUpIcon className="w-8 h-8 rotate-180 lg:absolute top-20 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce cursor-pointer" />
        </a>
      )}
    </div>
  );
}
