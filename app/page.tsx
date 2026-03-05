import StackedCardsMotion from "@/components/ScrollCards";
import IntroText from "@/components/IntroText";
import StationShortcuts from "@/components/StationShortcuts";
import StationRoadMap from "@/components/StationRoadMap";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background"
      style={{
        paddingTop: 'clamp(1dvh, 2dvh, 4dvh)',
        paddingRight: 'clamp(3vw, 5vw, 5vw)',
        paddingLeft: 'clamp(3vw, 5vw, 5vw)',
      }}>
      <main className="w-full px-[clamp(5vw, 10vw, 10vw)] pt-[clamp(2dvh, 3dvh, 5dvh)] pb-[clamp(5dvh, 5dvh, 10dvh)]">

        <section
          id="intro"
          className="mb-[clamp(6dvh,8dvh,10dvh)] md:mb-[clamp(10dvh,15dvh,20dvh)]"
        >
          <IntroText />
        </section>

        <section
          id="stationshortcuts"
          className="mb-[clamp(4dvh,6dvh,8dvh)] md:mb-[clamp(10dvh,15dvh,20dvh)]"
        >
          <StationShortcuts />
        </section>

        <section id="roadmap" style={{ marginBottom: 'clamp(10dvh, 15dvh, 20dvh)' }}>
          <StationRoadMap />
        </section>

        <section id="skills" style={{ marginBottom: 'clamp(10dvh, 15dvh, 20dvh)' }}>
          <StackedCardsMotion />
        </section>

      </main>
    </div>
  );
}
