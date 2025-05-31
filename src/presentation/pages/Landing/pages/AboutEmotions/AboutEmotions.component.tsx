import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ScrollShadow } from "@heroui/react";

import { Emotions } from "../../../../utils/emotion";

const AboutEmotions = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<{
    title: string;
    image: string;
    description: string;
    color: string;
  } | null>(null);

  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100 px-4 py-10">
      <p className="mt-2 text-4xl tracking-tight text-pretty font-wobble text-yellow-300 text-shadow sm:text-5xl font-bold text-center mb-10">
        What emotions we have?
      </p>

      <div className="w-full overflow-x-auto">
        <ScrollShadow
          className="w-max sm:w-full h-40 rounded-2xl p-2"
          orientation="horizontal"
          hideScrollBar={true}
        >
          <div className="flex items-center gap-4 sm:justify-center sm:gap-6">
            {Emotions.map((emotion, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedEmotion(emotion)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={emotion.image}
                  alt={emotion.title}
                  className="w-20 h-20 sm:w-40 sm:h-40 object-contain rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </ScrollShadow>
      </div>

      <AnimatePresence mode="wait">
        {selectedEmotion && (
          <motion.div
            key={selectedEmotion.title}
            className="text-center mt-10 px-4 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <h2
              className="text-3xl sm:text-5xl font-bold mb-4 font-wobble"
              style={{ color: selectedEmotion.color }}
            >
              {selectedEmotion.title}
            </h2>
            <motion.img
              src={selectedEmotion.image}
              alt={selectedEmotion.title}
              className="w-32 h-32 sm:w-48 sm:h-48 object-contain rounded-2xl mx-auto mb-4 balloon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-base sm:text-lg text-gray-800">
              {selectedEmotion.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center justify-center gap-2 text-gray-500 mt-5">
        <p>Made with ❤️ by Unai González</p>
      </div>
    </div>
  );
};

export default AboutEmotions;
