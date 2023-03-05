"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-7 w-10  bg-primary flex items-center p-1 cursor-pointer rounded-full"></div>
    );
  }

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={classNames(
        "h-7 w-10 bg-primary flex items-center p-1 cursor-pointer rounded-full transition-all",
        "hover:bg-primary-400 dark:hover:bg-primary-600",
        theme === "dark" ? "justify-start" : "justify-end"
      )}
    >
      <motion.div
        layout
        className="h-5 w-5 rounded-full bg-light dark:bg-dark p-1 text-primary"
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
