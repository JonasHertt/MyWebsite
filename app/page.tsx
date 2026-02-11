import StackedCardsMotion from "@/components/ScrollCards";
import IntroText from "@/components/IntroText";
import StationShortcuts from "@/components/StationShortcuts";
import StationRoadMap from "@/components/StationRoadMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-background"
      style={{
        paddingTop: 'clamp(5vh, 10vh, 15vh)',
        paddingRight: 'clamp(3vw, 5vw, 5vw)',
        paddingLeft: 'clamp(3vw, 5vw, 5vw)',
      }}>
      <main className="w-full px-[clamp(5vw, 10vw, 10vw)] pt-[clamp(2vh, 3vh, 5vh)] pb-[clamp(5vh, 5vh, 10vh)]">

        <section id="intro" style={{ marginBottom: 'clamp(10vh, 15vh, 20vh)' }}>
          <IntroText />
        </section>

        <section id="stationshortcuts" style={{ marginBottom: 'clamp(10vh, 15vh, 20vh)' }}>
          <StationShortcuts />
        </section>

        <section id="roadmap" style={{ marginBottom: 'clamp(10vh, 15vh, 20vh)' }}>
          <StationRoadMap />
        </section>

        <section id="skills" style={{ marginBottom: 'clamp(10vh, 15vh, 20vh)' }}>
          <StackedCardsMotion />
        </section>

      </main>
    </div>
  );
}
