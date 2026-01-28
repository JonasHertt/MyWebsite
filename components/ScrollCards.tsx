"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function StackedCardsMotion() {
  const { scrollY } = useScroll();

  // Scroll-Bereiche - angepasst für größere Karten (proportional größere Offsets)
  const y1 = useTransform(scrollY, [0, 300, 600, 900], [300, -80, -90, -100]);
  const y2 = useTransform(scrollY, [300, 600, 900, 1200], [600, -65, -75, -85]);
  const y3 = useTransform(scrollY, [600, 900, 1200, 1500], [900, -50, -60, -70]);
  const y4 = useTransform(scrollY, [900, 1200, 1500, 1800], [1200, -35, -45, -55]);
  const y5 = useTransform(scrollY, [1200, 1500, 1800, 2100], [1500, -20, -30, -40]);

  const s1 = useTransform(scrollY, [0, 200, 400, 600], [1, 0.96, 0.92, 0.88]);
  const s2 = useTransform(scrollY, [200, 400, 600, 800], [1, 0.97, 0.92, 0.90]);
  const s3 = useTransform(scrollY, [400, 600, 800, 1000], [1, 0.98, 0.94, 0.92]);
  const s4 = useTransform(scrollY, [600, 800, 1000, 1200], [1, 0.99, 0.95, 0.94]);
  const s5 = useTransform(scrollY, [800, 1000, 1200, 1400], [1, 1, 0.96, 0.96]);



  return (
    <div className="relative h-[2500px] flex justify-center">
      <div className="sticky top-40 h-[300px] w-full flex justify-center items-center">
        <motion.div
          className="absolute w-[30vw] h-[18.75vw] bg-blue-400 text-white p-4 rounded-lg shadow-lg z-10"
          style={{ y: y1, scale: s1 }}
        >
          Karte 1
        </motion.div>

        <motion.div
          className="absolute w-[30vw] h-[18.75vw] bg-green-400 text-white p-4 rounded-lg shadow-lg z-20"
          style={{ y: y2, scale: s2 }}
        >
          Karte 2
        </motion.div>

        <motion.div
          className="absolute w-[30vw] h-[18.75vw] bg-red-400 text-white p-4 rounded-lg shadow-lg z-30"
          style={{ y: y3, scale: s3 }}
        >
          Karte 3
        </motion.div>

        <motion.div
          className="absolute w-[30vw] h-[18.75vw] bg-yellow-400 text-white p-4 rounded-lg shadow-lg z-40"
          style={{ y: y4, scale: s4 }}
        >
          Karte 4
        </motion.div>

        <motion.div
          className="absolute w-[30vw] h-[18.75vw] bg-purple-400 text-white p-4 rounded-lg shadow-lg z-50"
          style={{ y: y5, scale: s5 }}
        >
          Karte 5
        </motion.div>
      </div>
    </div>
  );
}
