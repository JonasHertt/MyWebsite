"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function StackedCardsMotion() {
  const { scrollY } = useScroll();

  // Scroll-Bereiche - angepasst für größere Karten (proportional größere Offsets)
  const y1 = useTransform(scrollY, [0, 500], [300, -100]);
  const y2 = useTransform(scrollY, [500, 1000], [500, -85]);
  const y3 = useTransform(scrollY, [1000, 1500], [500, -70]);
  const y4 = useTransform(scrollY, [1500, 2000], [500, -55]);
  const y5 = useTransform(scrollY, [2000, 2500], [500, -40]);

  const s1 = useTransform(scrollY, [0, 500], [1, 0.74]);
  const s2 = useTransform(scrollY, [500, 1000], [1, 0.77]);
  const s3 = useTransform(scrollY, [1000, 1500], [1, 0.80]);
  const s4 = useTransform(scrollY, [1500, 2000], [1, 0.83]);
  const s5 = useTransform(scrollY, [2000, 2500], [1, 0.86]);



  const cardStyle = {
    background: 'linear-gradient(135deg,rgb(170, 178, 197) 0%,rgb(141, 141, 159) 50%,rgb(107, 114, 128) 100%)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
  };

  return (
    <div className="relative h-[2700px] flex justify-center">
      <div className="sticky top-40 h-[300px] w-full flex justify-center items-center">
        <motion.div
          className="absolute w-[40vw] h-[25vw] rounded-xl shadow-2xl overflow-hidden"
          style={{ 
            y: y1, 
            scale: s1,
            zIndex: 10,
            ...cardStyle
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative h-full p-6 text-gray-800 flex items-center justify-center">
            <span className="text-2xl font-semibold drop-shadow-lg text-white">Karte 1</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute w-[40vw] h-[25vw] rounded-xl shadow-2xl overflow-hidden"
          style={{ 
            y: y2, 
            scale: s2,
            zIndex: 20,
            ...cardStyle
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative h-full p-6 text-gray-800 flex items-center justify-center">
            <span className="text-2xl font-semibold drop-shadow-lg text-white">Karte 2</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute w-[40vw] h-[25vw] rounded-xl shadow-2xl overflow-hidden"
          style={{ 
            y: y3, 
            scale: s3,
            zIndex: 30,
            ...cardStyle
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative h-full p-6 text-gray-800 flex items-center justify-center">
            <span className="text-2xl font-semibold drop-shadow-lg text-white">Karte 3</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute w-[40vw] h-[25vw] rounded-xl shadow-2xl overflow-hidden"
          style={{ 
            y: y4, 
            scale: s4,
            zIndex: 40,
            ...cardStyle
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative h-full p-6 text-gray-800 flex items-center justify-center">
            <span className="text-2xl font-semibold drop-shadow-lg text-white">Karte 4</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute w-[40vw] h-[25vw] rounded-xl shadow-2xl overflow-hidden"
          style={{ 
            y: y5, 
            scale: s5,
            zIndex: 50,
            ...cardStyle
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative h-full p-6 text-gray-800 flex items-center justify-center">
            <span className="text-2xl font-semibold drop-shadow-lg text-white">Karte 5</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
