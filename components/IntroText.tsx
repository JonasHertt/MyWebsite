import Image from "next/image";

export default function IntroText() {
  return (
    <div className="relative overflow-visible">

      {/* ═══════════════════════════════════════════════
          HINTERGRUND-STRICHE  (hinter Text + Bild)
          ═══════════════════════════════════════════════ */}

      {/* — Linke Seite / Text-Bereich (subtiler) — */}
      <div className="absolute bg-scrollbar" style={{
        width: '22%', height: '2px',
        top: '5%', left: '0%',
        transform: 'rotate(-15deg)', opacity: 0.25,
      }} />
      <div className="absolute bg-txt" style={{
        width: '12%', height: '3px',
        top: '18%', left: '6%',
        transform: 'rotate(48deg)', opacity: 0.18,
      }} />
      <div className="absolute bg-scrollbar" style={{
        width: '30%', height: '2px',
        top: '38%', left: '-4%',
        transform: 'rotate(-6deg)', opacity: 0.2,
      }} />
      <div className="absolute bg-scrollbar" style={{
        width: '18%', height: '4px',
        bottom: '20%', left: '10%',
        transform: 'rotate(58deg)', opacity: 0.18,
      }} />
      <div className="absolute bg-txt" style={{
        width: '25%', height: '2px',
        bottom: '35%', left: '-2%',
        transform: 'rotate(-30deg)', opacity: 0.14,
      }} />
      <div className="absolute bg-scrollbar" style={{
        width: '14%', height: '2px',
        bottom: '8%', left: '20%',
        transform: 'rotate(22deg)', opacity: 0.22,
      }} />

      {/* — Mitte (verbindend, lang) — */}
      <div className="absolute bg-scrollbar" style={{
        width: '55%', height: '2px',
        top: '28%', left: '18%',
        transform: 'rotate(10deg)', opacity: 0.18,
      }} />
      <div className="absolute bg-txt" style={{
        width: '40%', height: '2px',
        top: '55%', left: '25%',
        transform: 'rotate(-12deg)', opacity: 0.12,
      }} />
      <div className="absolute bg-scrollbar" style={{
        width: '70%', height: '2px',
        bottom: '2%', left: '8%',
        transform: 'rotate(-4deg)', opacity: 0.15,
      }} />

      {/* — Mitte extra (Lücke füllen) — */}
      <div className="absolute bg-scrollbar" style={{
        width: '28%', height: '2px',
        top: '42%', left: '38%',
        transform: 'rotate(32deg)', opacity: 0.3,
      }} />
      <div className="absolute bg-txt" style={{
        width: '22%', height: '3px',
        top: '65%', left: '42%',
        transform: 'rotate(-20deg)', opacity: 0.35,
      }} />
      <div className="absolute bg-scrollbar" style={{
        width: '18%', height: '2px',
        top: '20%', left: '45%',
        transform: 'rotate(-42deg)', opacity: 0.28,
      }} />

      {/* ═══════════════════════════════════════════════
          INHALT  (Text + Bild)
          ═══════════════════════════════════════════════ */}

      <div className="relative flex items-center justify-between w-full gap-[clamp(1rem,2vw,3rem)]" style={{ zIndex: 1 }}>
        <div className="space-y-4 text-xl md:text-2xl text-txt flex-1" style={{ maxWidth: 'clamp(45vw, 50vw, 55vw)' }}>
          <p className="font-semibold">
            Interdisciplinary Engineer • Problem Solver • Founder
          </p>
          <p className="text-lg md:text-xl opacity-90">
          I’m not a classic IT engineer. My background spans signal processing, measurement technology, electroacoustics, and full-stack product development. I work across disciplines—bridging hardware, data, and software—to turn complex, real-world problems into robust, scalable solutions.


          </p>
          <p className="text-base md:text-lg opacity-80">
          Currently CTO at Trip-Panda, I focus on building reliable systems—from data integration and server architecture to user-facing applications. My approach is hands-on, analytical, and driven by a clear goal: solutions that actually work in practice.
          </p>
        </div>

        <div className="flex-shrink-0" style={{ marginRight: 'clamp(2rem, 4vw, 6rem)' }}>
          <div className="relative group cursor-pointer">
            {/* Grüner Glitch-Offset — nur bei Hover sichtbar */}
            <Image
              src="/profile_image/DSC03115.JPG"
              alt=""
              aria-hidden="true"
              width={500}
              height={750}
              className="absolute top-0 left-0 rounded-sm opacity-[0.12] translate-x-1 translate-y-1 group-hover:opacity-55 group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-300 ease-out"
              style={{
                width: 'clamp(150px, 15vw, 300px)',
                height: 'auto',
                filter: 'grayscale(1) brightness(0.4) sepia(1) hue-rotate(70deg) saturate(10)',
                zIndex: 0,
              }}
            />

            {/* Hauptbild */}
            <Image
              src="/profile_image/DSC03115.JPG"
              alt="Profile Picture"
              width={500}
              height={750}
              className="relative rounded-sm shadow-md"
              style={{
                width: 'clamp(150px, 15vw, 300px)',
                height: 'auto',
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
