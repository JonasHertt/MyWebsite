export default function StackedCardsMotion() {

  const cards = [
    { label: "Karte 1", color: "rgb(197, 196, 190)" },
    { label: "Karte 2", color: "rgb(187, 186, 180)" },  
    { label: "Karte 3", color: "rgb(177, 176, 170)" },
    { label: "Karte 4", color: "rgb(165, 164, 161)" },
    { label: "Karte 5", color: "rgb(155, 154, 152)" },
  ];

  return (
    <div 
      className="mx-auto flex"
      style={{ 
        minHeight: '250vh',
        paddingTop: 'clamp(5vh, 10vh, 15vh)',
        paddingBottom: 'clamp(5vh, 30vh, 30vh)',
        gap: 'clamp(10vw, 15vw, 20vw)' // Abstand zwischen Text und Karten - größer auf großen Bildschirmen
      }}
    >
      <div 
        className="text-txt sticky rounded-xl overflow-hidden"
        style={{
          fontSize: 'clamp(2vw, 3vw, 4vw)',
          height: 'clamp(200px, 35vh, 350px)',
          top: 'clamp(200px, 35vh, 350px)'
        }}
      >
        Softskills, Hardskills und weitere Qualifikationen
      </div>
      <div 
        className="flex flex-col sticky"
        style={{ gap: 'clamp(5vh, 10vh, 15vh)' }}
      >
        {cards.map((card, i) => {
          // Jede Karte hat einen leicht nach unten links verschobenen sticky Punkt
          const topOffset = i * 2; // 0vh, 2vh, 4vh, 6vh, 8vh
          const leftOffset = i * 1; // 0vw, 1vw, 2vw, 3vw, 4vw
          
          return (
            <div
              key={i}
              className="sticky rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 ease-out"
              style={{
                width: 'clamp(20vw, 25vw, 30vw)',
                height: 'clamp(25vh, 35vh, 35vh)',
                top: `clamp(${25 + topOffset}vh, ${35 + topOffset}vh, ${35 + topOffset}vh)`,
                marginLeft: `-${leftOffset}vw`,
                backgroundColor: card.color,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"/>
              <div className="relative h-full flex items-center justify-center">
                <span className="text-2xl font-semibold text-white drop-shadow-sm">
                  {card.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
