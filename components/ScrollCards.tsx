export default function StackedCardsMotion() {
  const SKILLS_PER_COLUMN = 5;

  type SkillItem = {
    label: string;
    depth: number; // 1-10
  };

  type SkillCard = {
    title: string;
    color: string;
    skills: SkillItem[];
  };

  const cards: SkillCard[] = [
    {
      title: "Software Engineering & Fullstack Development",
      color: "rgb(197, 196, 190)",
      // skills: [
      //   { label: "Next.js (.tsx, .jsx, SEO)", depth: 9 },
      //   {label: "Tailwind CSS", depth: 7},
      //   {label: "Python", depth: 10},
      //   {label: "REST APIs", depth: 8},
      //   {label: "PostgreSQL", depth: 9},
      //   {label: "Git", depth: 8},
      //   {label: "Docker", depth: 7},
      //   {label: "Dart + Flutter", depth: 8},
      //   {label: "Java", depth: 6},
      //   {label: "C++", depth: 4},
      //   {label: "MATLAB", depth: 10},
      //   {label: "LaTeX / Markdown", depth: 9},
      // ],
      skills: [
        { label: "Next.js / TypeScript", depth: 9 },
        { label: "Tailwind CSS", depth: 7},
        { label: "Python", depth: 10 },
        { label: "PostgreSQL", depth: 9 },
        { label: "Git & Workflow", depth: 8 },
        { label: "MATLAB", depth: 10 },
        { label: "Dart / Flutter", depth: 8},
        { label: "Java", depth: 6},
        { label: "C++", depth: 4},
        { label: "LaTeX / Markdown", depth: 9},
        
      ]
    },
    {
      title: "Systems & Infrastructure",
      color: "rgb(187, 186, 180)",
      skills: [
        { label: "Docker", depth: 7 },
        { label: "Cloud / Deployment", depth: 8 },
        { label: "API Development (REST)", depth: 8 },
        { label: "Monitoring & Reliability", depth: 7 }
      ]
    },
    {
      title: "Product & Data Thinking",
      color: "rgb(177, 176, 170)",
      skills: [
        { label: "MVP Development", depth: 9 },
        { label: "Analytics & Experimentation", depth: 8 },
        { label: "SEO & Growth", depth: 7 },
        { label: "Feature Prioritization", depth: 8 }
      ]
    },
    {
      title: "Acoustics & Signal Technology",
      color: "rgb(165, 164, 161)",
      skills: [
        { label: "Signal Processing", depth: 9 },
        { label: "Beamforming", depth: 9 },
        { label: "Acoustic Measurement", depth: 8 },
        { label: "Audiology Technology", depth: 8 }
      ]
    },
    {
      title: "Leadership & International Experience",
      color: "rgb(155, 154, 152)",
      skills: [
        { label: "Problem Solving", depth: 10 },
        { label: "English C1 Work Environment", depth: 9 },
        { label: "Work & Travel Australia", depth: 8 },
        { label: "Team Collaboration", depth: 9 }
      ]
    },
  ];

  return (
    <div className="mx-auto w-full">
      {/* Mobile Layout: Headline über den Karten */}
      <div
        className="isolate flex flex-col gap-8 md:hidden"
        style={{
          minHeight: "220vh",
          paddingTop: "clamp(3vh, 6vh, 8vh)",
          paddingBottom: "clamp(6vh, 14vh, 18vh)",
        }}
      >
        <div className="flex flex-col items-start" style={{ gap: "clamp(5vh, 8vh, 12vh)" }}>
          {cards.map((card, i) => {
            const topOffset = i * 2;
            const rightOffset = i * 0.6;
            const skillColumns = [
              card.skills.slice(0, SKILLS_PER_COLUMN),
              card.skills.slice(SKILLS_PER_COLUMN),
            ].filter(
              (column) => column.length > 0
            );

            return (
              <div
                key={`mobile-${i}`}
                className={`sticky z-10 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 ease-out ${
                  i === 0 ? "overflow-visible" : "overflow-hidden"
                }`}
                style={{
                  width: "clamp(74vw, 80vw, 86vw)",
                  height: "clamp(28vh, 36vh, 40vh)",
                  top: `calc(72px + ${3 + topOffset}rem)`,
                  marginLeft: `${rightOffset}vw`,
                  backgroundColor: card.color,
                }}
              >
                {i === 0 && (
                  <div
                    className="absolute z-[70] rounded-md bg-background/95 px-3 py-1 text-left text-txt backdrop-blur-[1px]"
                    style={{
                      top: "0",
                      transform: "translateY(calc(-100% - 0.4rem))",
                      left: "0",
                      width: "100%",
                      fontSize: "clamp(1.12rem, 5.7vw, 1.55rem)",
                    }}
                  >
                    Hardskills, Softskills and further qualifications
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                <div className="relative flex h-full flex-col p-3">
                  <h3 className="mb-2 text-[clamp(1rem,4.4vw,1.2rem)] font-bold leading-tight text-txt">
                    {card.title}
                  </h3>
                  <div className={`grid gap-2 ${skillColumns.length > 1 ? "grid-cols-2 gap-x-3" : "grid-cols-1"}`}>
                    {skillColumns.map((column, columnIndex) => (
                        <ul key={`mobile-skill-col-${columnIndex}`} className="space-y-1">
                        {column.map((skill) => (
                          <li key={`${skill.label}-${columnIndex}`} className="space-y-0.5">
                            <span className="block text-[clamp(0.68rem,2.75vw,0.86rem)] font-medium leading-tight text-txt">
                              {skill.label}
                            </span>
                            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/60">
                              <div
                                className="absolute inset-y-0 left-0 rounded-full bg-txt"
                                style={{
                                  width: "100%",
                                  transformOrigin: "left center",
                                  transform: `scaleX(${skill.depth / 10})`,
                                }}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Layout: bisherige Komposition */}
      <div
        className="hidden md:flex"
        style={{
          minHeight: "250vh",
          paddingTop: "clamp(5vh, 10vh, 15vh)",
          paddingBottom: "clamp(5vh, 30vh, 30vh)",
          gap: "clamp(5vw, 7.5vw, 10vw)",
        }}
      >
        <div
          className="sticky overflow-hidden rounded-xl text-txt"
          style={{
            fontSize: "clamp(2vw, 3vw, 4vw)",
            height: "clamp(200px, 35vh, 350px)",
            top: "clamp(200px, 35vh, 350px)",
          }}
        >
          Hardskills, Softskills and further Qualifications
        </div>
        <div className="sticky flex flex-col" style={{ gap: "clamp(5vh, 10vh, 15vh)" }}>
          {cards.map((card, i) => {
            const topOffset = i * 2;
            const leftOffset = i * 1;
            const skillColumns = [
              card.skills.slice(0, SKILLS_PER_COLUMN),
              card.skills.slice(SKILLS_PER_COLUMN),
            ].filter(
              (column) => column.length > 0
            );

            return (
              <div
                key={`desktop-${i}`}
                className="sticky rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 ease-out"
                style={{
                  width: "clamp(24vw, 30vw, 36vw)",
                  height: "clamp(34vh, 46vh, 50vh)",
                  top: `clamp(${20 + topOffset}vh, ${30 + topOffset}vh, ${30 + topOffset}vh)`,
                  marginLeft: `-${leftOffset}vw`,
                  backgroundColor: card.color,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                <div className="relative flex h-full flex-col p-5">
                  <h3 className="mb-4 text-[clamp(1.15rem,1.5vw,1.5rem)] font-bold leading-tight text-txt">
                    {card.title}
                  </h3>
                  <div className={`grid gap-3 ${skillColumns.length > 1 ? "grid-cols-2 gap-x-4" : "grid-cols-1"}`}>
                    {skillColumns.map((column, columnIndex) => (
                        <ul key={`desktop-skill-col-${columnIndex}`} className="space-y-2">
                        {column.map((skill) => (
                          <li key={`${skill.label}-${columnIndex}`} className="space-y-0.5">
                            <span className="block text-[clamp(0.82rem,1.02vw,0.98rem)] font-medium text-txt">
                              {skill.label}
                            </span>
                            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/60">
                              <div
                                className="absolute inset-y-0 left-0 rounded-full bg-txt"
                                style={{
                                  width: "100%",
                                  transformOrigin: "left center",
                                  transform: `scaleX(${skill.depth / 10})`,
                                }}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    ))}
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
