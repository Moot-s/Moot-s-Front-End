import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import ProfileIcon from "../../../../icons/ProfileIcon/ProfileIcon";

const navItems = [
  { label: "Inicio", page: 0 },
  { label: "Características", page: 1 },
  { label: "Emociones", page: 2 },
];

export default function Navbar({ currentPage, setPageIndex }: { currentPage: number, setPageIndex: (index: number) => void }) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-[999]"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <img src="/img/logo.png" alt="Moot logo" className="w-28" />

        <ul className="flex space-x-6 text-gray-700 font-bold text-lg">
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
        <div>
            <Button startContent={<ProfileIcon className="fill-gray-600" />} className="text-gray-600 font-semibold" onPress={() => window.location.href='/auth'}>Dashboard</Button>
        </div>

      </div>
    </motion.nav>
  );
}
