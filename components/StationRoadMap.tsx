export default function StationRoadMap() {
  const stations = [
    {
      id: "station-1",
      number: "01",
      title: "08/2018 - 08/2019: GBA Gesellschaft für Bioanalytik",
      description: "Labor assistant in the food analysis department (fruit analysis) with flexible assignments across HR support and sample transport. Supported laboratory workflows as a part-time food analysis assistant, including sample preparation and general laboratory assistance tasks in quality control processes.",
    },
    {
      id: "station-2",
      number: "02",
      title: "09/2019 - 07/2020: Work & Travel",
      description: "Work & travel stay in Australia for one year, working in industrial and hands-on operational environments. Gained experience as a machine operator and maintenance worker at Coorow Seeds (operation, monitoring, and cleaning of production machinery, mills, forklifts, trucks, and silos) as well as a technical and landscaping assistant at Australian Synthetic Lawns, where I also supported onboarding of new team members. This experience strengthened intercultural communication skills, independence, and the ability to work in international teams.",
    },
    {
      id: "station-3",
      number: "03",
      title: "9/2020 – 02/2025: B.Eng. Hörtechnik & Audiologie",
      description: "Studied at Jade Hochschule Wilhelmshaven/Oldenburg/Elsfleth, with a strong focus on acoustics, signal processing, and software development. Academic training included multiple computer science modules such as programming fundamentals, applied programming, and data handling. Practical experience was gained through developing small applications and projects in Python, Java, C++, and MATLAB, combining theoretical signal processing knowledge with software implementation. This laid the foundation for a structured, solution-oriented engineering mindset.",
    },
    {
      id: "station-4",
      number: "04",
      title: "02/2023 – 07/2024: Fraunhofer-Institut für Digitale Medientechnologie, Institutsteil \"Hör-, Sprach- und Audiotechnologie\" HSA",
      description: "Worked at the Fraunhofer Institute for Digital Media Technology, department “Hearing, Speech and Audio Technology (HSA).” Responsibilities included the segmentation and annotation of speech signals as well as small programming tasks in Python.",
    },
    {
      id: "station-5",
      number: "05",
      title: "08/2024 – 01/2025: Sennheiser electronic SE & Co. KG",
      description: "Bachelor’s thesis internship focused on the topic “In Situ Calibration of a Beamformer.” Conducted acoustic measurements and analyzed the resulting data by implementing a beamforming algorithm, primarily using MATLAB and Python. The work involved an in-depth exploration of core concepts in signal processing and their practical application in acoustic measurement systems.",
    },
    {
      id: "station-6",
      number: "06",
      title: "02/2025 – today: Trip-Panda UG (haftungsbeschränkt)",
      description: "Co-Founder and CTO of a platform for travel vouchers. Responsible for the overall technical architecture and full-stack development. The frontend is built with Next.js, Tailwind CSS, JSX, and TypeScript, while the backend relies on PostgreSQL using self-hosted infrastructure. Deployment and infrastructure are managed through self-hosting with Cloudflare and Dokploy (Docker-based).",
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
