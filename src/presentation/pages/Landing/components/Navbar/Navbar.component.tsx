import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import ProfileIcon from "../../../../icons/ProfileIcon/ProfileIcon";

const navItems = [
  { label: "Inicio", page: 0 },
  { label: "Características", page: 1 },
  { label: "Emociones", page: 2 },
];

export default function Navbar({ currentPage, setPageIndex }: { currentPage: number, setPageIndex: (index: number) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-[999]"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <img src="/img/logo.png" alt="Moot logo" className="w-24 sm:w-28" />

        <button
          className="sm:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-600"></span>
          <span className="w-6 h-0.5 bg-gray-600"></span>
          <span className="w-6 h-0.5 bg-gray-600"></span>
        </button>

        <ul className="hidden sm:flex space-x-6 text-gray-700 font-bold text-lg">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer relative ${
                currentPage === item.page ? "text-blue-500" : ""
              }`}
              onClick={() => setPageIndex(item.page)}
            >
              {item.label}
              {currentPage === item.page && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400 rounded"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden sm:block">
          <Button
            startContent={<ProfileIcon className="fill-gray-600" />}
            className="text-gray-600 font-semibold"
            onPress={() => (window.location.href = "/auth")}
          >
            Dashboard
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-gray-700 font-bold text-base">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  currentPage === item.page ? "text-blue-500" : ""
                }`}
                onClick={() => {
                  setPageIndex(item.page);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
            <li>
              <Button
                startContent={<ProfileIcon className="fill-gray-600" />}
                className="text-gray-600 font-semibold w-full"
                onPress={() => (window.location.href = "/auth")}
              >
                Dashboard
              </Button>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
