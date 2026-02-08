"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = totalScrollableHeight > 0 
        ? (scrollTop / totalScrollableHeight) * 100 
        : 0;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <nav className="bg-secondary border-b border-gray-500 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-txt">Jonas Herdlitschke</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll-Fortschrittsbalken */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-gray-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
}
