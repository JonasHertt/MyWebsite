export default function StationRoadMap() {
  const stations = [
    {
      id: "station-1",
      number: "01",
      title: "Start",
      description: "Beginning of the journey. Setting goals and defining the path forward.",
    },
    {
      id: "station-2",
      number: "02",
      title: "Development",
      description: "Building skills and gaining experience in software development.",
    },
    {
      id: "station-3",
      number: "03",
      title: "Innovation",
      description: "Creating innovative solutions and pushing boundaries.",
    },
    {
      id: "station-4",
      number: "04",
      title: "Growth",
      description: "Expanding knowledge and taking on new challenges.",
    },
    {
      id: "station-5",
      number: "05",
      title: "Mastery",
      description: "Achieving expertise and mentoring others.",
    },
    {
      id: "station-6",
      number: "06",
      title: "Future",
      description: "Looking ahead to new opportunities and continued growth.",
    },
  ];

  return (
    <div className="relative py-16">
      <h2 className="text-4xl font-bold text-txt mb-16 text-center">My Journey</h2>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="space-y-48 relative">
          {[...stations].reverse().map((station, index) => {
            const isEven = index % 2 === 1;
            const circleLeft = isEven ? '4rem' : '0';
            const nextIsEven = index < stations.length - 1 && (index + 1) % 2 === 1;
            
            return (
              <div key={station.id} className="relative">
                {/* Verbindungslinie zur nächsten Station */}
                {index < stations.length - 1 && (
                  <svg 
                    className="absolute pointer-events-none z-0" 
                    style={{ 
                      left: '0',
                      top: '3rem',
                      width: '100%',
                      height: '15rem'
                    }}
                  >
                    <line
                      x1={isEven ? '7rem' : '3rem'}
                      y1="0"
                      x2={nextIsEven ? '7rem' : '3rem'}
                      y2="15rem"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-txt opacity-30"
                    />
                  </svg>
                )}
                
                <div 
                  id={station.id} 
                  className="flex items-start gap-12 relative"
                  style={{ paddingLeft: isEven ? '8rem' : '8rem' }}
                >
                  <div className="absolute flex-shrink-0 z-10" style={{ left: circleLeft }}>
                    <div className="w-24 h-24 rounded-full border-4 border-txt flex items-center justify-center bg-background">
                      <span className="text-3xl font-bold text-txt">{station.number}</span>
                    </div>
                  </div>

                  <div className="flex-1" style={{ marginLeft: isEven ? '4rem' : '0' }}>
                    <h3 className="text-2xl font-bold text-txt mb-3">{station.title}</h3>
                    <p className="text-lg text-txt opacity-80">{station.description}</p>
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
