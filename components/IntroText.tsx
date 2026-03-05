import Image from "next/image";

export default function IntroText() {
  const headlineItems = [
    "Interdisciplinary Engineer",
    "Problem Solver",
    "Founder",
  ];
  const introParagraph =
    "I’m not a classic IT engineer. My background spans signal processing, measurement technology, electroacoustics, and full-stack product development. I work across disciplines—bridging hardware, data, and software—to turn complex, real-world problems into robust, scalable solutions.";
  const ctoParagraph =
    "Currently CTO at Trip-Panda, I focus on building reliable systems—from data integration and server architecture to user-facing applications. My approach is hands-on, analytical, and driven by a clear goal: solutions that actually work in practice.";
  const desktopLines = [
    { colorClass: "bg-scrollbar", style: { width: "26%", height: "2px", top: "5%", left: "-2%", transform: "rotate(-15deg)", opacity: 0.25 } },
    { colorClass: "bg-txt", style: { width: "12%", height: "3px", top: "18%", left: "6%", transform: "rotate(48deg)", opacity: 0.18 } },
    { colorClass: "bg-scrollbar", style: { width: "30%", height: "2px", top: "38%", left: "-4%", transform: "rotate(-6deg)", opacity: 0.2 } },
    { colorClass: "bg-scrollbar", style: { width: "18%", height: "4px", bottom: "20%", left: "10%", transform: "rotate(58deg)", opacity: 0.18 } },
    { colorClass: "bg-txt", style: { width: "25%", height: "2px", bottom: "35%", left: "-2%", transform: "rotate(-30deg)", opacity: 0.14 } },
    { colorClass: "bg-scrollbar", style: { width: "14%", height: "2px", bottom: "8%", left: "20%", transform: "rotate(22deg)", opacity: 0.22 } },
    { colorClass: "bg-scrollbar", style: { width: "55%", height: "2px", top: "28%", left: "18%", transform: "rotate(10deg)", opacity: 0.18 } },
    { colorClass: "bg-txt", style: { width: "40%", height: "2px", top: "55%", left: "25%", transform: "rotate(-12deg)", opacity: 0.12 } },
    { colorClass: "bg-scrollbar", style: { width: "70%", height: "2px", bottom: "2%", left: "8%", transform: "rotate(-4deg)", opacity: 0.15 } },
    { colorClass: "bg-scrollbar", style: { width: "28%", height: "2px", top: "42%", left: "38%", transform: "rotate(32deg)", opacity: 0.3 } },
    { colorClass: "bg-txt", style: { width: "22%", height: "2px", top: "65%", left: "42%", transform: "rotate(-20deg)", opacity: 0.35 } },
    { colorClass: "bg-scrollbar", style: { width: "18%", height: "2px", top: "20%", left: "45%", transform: "rotate(-42deg)", opacity: 0.28 } },
  ];
  const mobileLines = [
    { colorClass: "bg-scrollbar", style: { width: "42%", height: "2px", top: "8%", left: "-4%", transform: "rotate(-14deg)", opacity: 0.26 } },
    { colorClass: "bg-txt", style: { width: "24%", height: "2px", top: "17%", left: "12%", transform: "rotate(36deg)", opacity: 0.2 } },
    { colorClass: "bg-scrollbar", style: { width: "48%", height: "2px", top: "28%", left: "-2%", transform: "rotate(-7deg)", opacity: 0.24 } },
    { colorClass: "bg-scrollbar", style: { width: "68%", height: "2px", top: "44%", left: "18%", transform: "rotate(8deg)", opacity: 0.2 } },
    { colorClass: "bg-txt", style: { width: "46%", height: "2px", top: "58%", left: "20%", transform: "rotate(-11deg)", opacity: 0.16 } },
    { colorClass: "bg-scrollbar", style: { width: "78%", height: "2px", bottom: "12%", left: "4%", transform: "rotate(-4deg)", opacity: 0.18 } },
    { colorClass: "bg-scrollbar", style: { width: "34%", height: "2px", bottom: "30%", left: "44%", transform: "rotate(28deg)", opacity: 0.26 } },
    { colorClass: "bg-txt", style: { width: "30%", height: "2px", bottom: "22%", left: "48%", transform: "rotate(-20deg)", opacity: 0.24 } },
  ];

  return (
    <div className="relative overflow-x-clip">

      {/* ═══════════════════════════════════════════════
          HINTERGRUND-STRICHE  (hinter Text + Bild)
          ═══════════════════════════════════════════════ */}

      {/* Desktop-Linien */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-full overflow-hidden md:block">
        {desktopLines.map((line, index) => (
          <div key={`desktop-line-${index}`} className={`absolute ${line.colorClass}`} style={line.style} />
        ))}
      </div>

      {/* ═══════════════════════════════════════════════
          INHALT  (Text + Bild)
          ═══════════════════════════════════════════════ */}

      {/* Mobile-Layout */}
      <div className="relative z-10 flex w-full flex-col gap-5 md:hidden">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 rounded-lg bg-background/55 px-1 py-1 text-txt backdrop-blur-[1px]">
            <ul className="space-y-2.5 text-[clamp(1.08rem,5vw,1.38rem)] leading-tight">
              {headlineItems.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-background/80 px-2 py-1.5 font-extrabold tracking-tight shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="shrink-0">
            <div className="relative group cursor-pointer">
              <Image
                src="/profile_image/DSC03115.JPG"
                alt=""
                aria-hidden="true"
                width={500}
                height={750}
                className="absolute left-0 top-0 w-[clamp(120px,34vw,170px)] translate-x-1 translate-y-1 rounded-sm opacity-[0.12] transition-all duration-300 ease-out"
                style={{
                  height: "auto",
                  filter: "grayscale(1) brightness(0.4) sepia(1) hue-rotate(70deg) saturate(10)",
                  zIndex: 0,
                }}
              />
              <Image
                src="/profile_image/DSC03115.JPG"
                alt="Profile Picture"
                width={500}
                height={750}
                className="relative w-[clamp(120px,34vw,170px)] rounded-sm shadow-md"
                style={{ height: "auto", zIndex: 1 }}
              />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-background/55 px-2 py-2 text-txt backdrop-blur-[1px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {mobileLines.map((line, index) => (
              <div key={`mobile-line-${index}`} className={`absolute ${line.colorClass}`} style={line.style} />
            ))}
          </div>

          <div className="relative z-10 space-y-4">
            <p className="text-[clamp(1.02rem,4.6vw,1.2rem)] leading-relaxed opacity-90">
              {introParagraph}
            </p>
            <p className="text-[clamp(0.95rem,4.1vw,1.08rem)] leading-relaxed opacity-80">
              {ctoParagraph}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop-Layout */}
      <div className="relative z-10 hidden w-full md:flex md:items-center md:justify-between md:gap-[clamp(1rem,2vw,3rem)]">
        <div
          className="space-y-4 rounded-lg bg-background/40 px-1 py-1 text-txt backdrop-blur-[1px] md:flex-1"
          style={{ maxWidth: "100%" }}
        >
          <p className="text-[clamp(1.4rem,2.2vw,2rem)] font-semibold leading-tight">
            {headlineItems.join(" • ")}
          </p>
          <p className="text-xl opacity-90 leading-relaxed">{introParagraph}</p>
          <p className="text-lg opacity-80 leading-relaxed">{ctoParagraph}</p>
        </div>

        <div className="mx-auto flex-shrink-0 md:mx-0" style={{ marginRight: "clamp(0rem, 4vw, 6rem)" }}>
          <div className="relative group cursor-pointer">
            <Image
              src="/profile_image/DSC03115.JPG"
              alt=""
              aria-hidden="true"
              width={500}
              height={750}
              className="absolute top-0 left-0 w-[clamp(170px,15vw,300px)] translate-x-1 translate-y-1 rounded-sm opacity-[0.12] transition-all duration-300 ease-out md:group-hover:translate-x-5 md:group-hover:translate-y-5 md:group-hover:opacity-55"
              style={{
                height: "auto",
                filter: "grayscale(1) brightness(0.4) sepia(1) hue-rotate(70deg) saturate(10)",
                zIndex: 0,
              }}
            />
            <Image
              src="/profile_image/DSC03115.JPG"
              alt="Profile Picture"
              width={500}
              height={750}
              className="relative w-[clamp(170px,15vw,300px)] rounded-sm shadow-md"
              style={{ height: "auto", zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
