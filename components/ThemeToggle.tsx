"use client"
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
 
  useEffect(() => {
    setMounted(true);
  }, []);
 
  if (!mounted) {
    return <div className="h-10 w-10" />; 
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}