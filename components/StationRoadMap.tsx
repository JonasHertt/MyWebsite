export default function StationRoadMap() {
  const stations = [
    {
      id: "station-1",
      number: "01",
      title: "GBA Gesellschaft für Bioanalytik",
      description: "Beginning of the journey. Setting goals and defining the path forward.",
    },
    {
      id: "station-2",
      number: "02",
      title: "Work & Travel",
      description: "Building skills and gaining experience in software development.",
    },
    {
      id: "station-3",
      number: "03",
      title: "B.Eng. Hörtechnik & Audiologie",
      description: "Creating innovative solutions and pushing boundaries.",
    },
    {
      id: "station-4",
      number: "04",
      title: "Fraunhofer-Institut für Digitale Medientechnologie, Institutsteil \"Hör-, Sprach- und Audiotechnologie\" HSA",
      description: "Expanding knowledge and taking on new challenges.",
    },
    {
      id: "station-5",
      number: "05",
      title: "Sennheiser electronic SE & Co. KG",
      description: "Achieving expertise and mentoring others.",
    },
    {
      id: "station-6",
      number: "06",
      title: "Trip-Panda UG (haftungsbeschränkt)",
      description: "Looking ahead to new opportunities and continued growth.",
    },
  ];

  return (
    <div className="relative py-12 md:py-16">
      <h2 className="mb-10 text-center text-4xl font-bold text-txt md:mb-16">My Journey</h2>
      
      <div className="relative ml-auto mr-0 max-w-4xl md:mr-[1%]">
        <div className="relative space-y-10 md:space-y-48">
          {[...stations].reverse().map((station, index) => {
            const isEven = index % 2 === 1;
            const circleLeft = isEven ? '4rem' : '0';
            const nextIsEven = index < stations.length - 1 && (index + 1) % 2 === 1;
            
            return (
              <div key={station.id} id={station.id} className="relative">
                {/* Mobile Layout */}
                <div className="relative md:hidden">
                  {index < stations.length - 1 && (
                    <div className="pointer-events-none absolute bottom-[-2.5rem] left-7 top-14 z-0 w-0.5 bg-txt/30" />
                  )}

                  <div className="relative z-10 flex items-start gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-txt bg-background">
                      <span className="text-[1.9rem] font-bold leading-none text-txt">{station.number}</span>
                    </div>

                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="mb-2 text-[clamp(1.15rem,5vw,1.5rem)] font-bold leading-tight text-txt">
                        {station.title}
                      </h3>
                      <p className="text-[clamp(0.95rem,4.2vw,1.15rem)] leading-relaxed text-txt opacity-80">
                        {station.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="relative hidden md:block">
                  {/* Verbindungslinie zur nächsten Station */}
                  {index < stations.length - 1 && (
                    <div
                      className="pointer-events-none absolute z-0"
                      style={{
                        left: "0",
                        top: "3rem",
                        width: "100%",
                        bottom: "-15rem",
                      }}
                    >
                      <svg className="h-full w-full overflow-visible">
                        <line
                          x1={isEven ? "7rem" : "3rem"}
                          y1="0"
                          x2={nextIsEven ? "7rem" : "3rem"}
                          y2="100%"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-txt opacity-30"
                        />
                      </svg>
                    </div>
                  )}

                  <div
                    className="relative flex items-start gap-12"
                    style={{ paddingLeft: "8rem" }}
                  >
                    <div className="absolute z-10 flex-shrink-0" style={{ left: circleLeft }}>
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-txt bg-background">
                        <span className="text-3xl font-bold text-txt">{station.number}</span>
                      </div>
                    </div>

                    <div className="flex-1" style={{ marginLeft: isEven ? "4rem" : "0" }}>
                      <h3 className="mb-3 text-2xl font-bold text-txt">{station.title}</h3>
                      <p className="text-lg text-txt opacity-80">{station.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
