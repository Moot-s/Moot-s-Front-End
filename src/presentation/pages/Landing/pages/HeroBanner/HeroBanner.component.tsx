import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { EmotionImages } from "../../../../utils/emotion";

const getRandomEmotions = (arr: string[], count: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const HeroBanner = () => {
  const [randomEmotions, setRandomEmotions] = useState<string[]>([]);

  useEffect(() => {
    const selected = getRandomEmotions(EmotionImages, 5);
    setRandomEmotions(selected);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="w-full max-w-6xl px-4">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
          {randomEmotions.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="Moot emotion"
              className="w-40 h-40 md:w-60 md:h-60 object-contain rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="text-center px-6 mt-12 max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="flex flex-col xl:flex-row items-center justify-center gap-4 font-wobble text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-l from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text text-shadow-lg">
          Welcome to{" "}
          <img
            src="/img/logo.png"
            alt="Moot logo"
            className="inline-block w-48 sm:w-60 md:w-72"
          />
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
          Emotions are the colors with which we paint our human experience;
          sometimes intense like a storm, other times gentle like a breeze. They
          guide us, alert us, connect us with others and with ourselves,
          revealing truths that the mind often fails to comprehend.
        </p>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
