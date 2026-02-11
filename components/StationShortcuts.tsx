"use client";

export default function StationShortcuts() {
  const stations = [
    { id: "station-6", label: "6) Trip-Panda"},
    { id: "station-5", label: "5) Sennheiser"},
    { id: "station-4", label: "4) Fraunhofer-Institut"},
    { id: "station-3", label: "3) B.Eng. H & A"},
    { id: "station-2", label: "2) Work & Travel"},
    { id: "station-1", label: "1) GBA" },
  ];

  const scrollToStation = (stationId: string) => {
    const element = document.getElementById(stationId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-txt mb-8">Key Milestones</h2>
      <div className="grid grid-cols-2 gap-4 max-w-2xl mr-auto">
        {stations.map((station) => (
          <button
            key={station.id}
            onClick={() => scrollToStation(station.id)}
            className="relative bg-txt text-white transition-all duration-200 ease-out flex items-center justify-center shadow-lg py-3 px-8 hover:translate-x-4 hover:scale-105 hover:shadow-xl"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
              minHeight: "48px",
            }}
          >
            <span className="text-base font-semibold">
              {station.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
