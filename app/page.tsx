import StackedCardsMotion from "@/components/ScrollCards";
import IntroText from "@/components/IntroText";
import StationShortcuts from "@/components/StationShortcuts";
import StationRoadMap from "@/components/StationRoadMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-background"
      style={{
        paddingTop: 'clamp(15vh, 20vh, 25vh)',
        paddingRight: 'clamp(3vw, 5vw, 5vw)',
        paddingLeft: 'clamp(3vw, 5vw, 5vw)',
      }}>
      <main className="w-full px-[clamp(5vw, 10vw, 10vw)] py-[clamp(10vh, 15vh, 20vh)]">
        <section id="intro" className="">
          <IntroText />
        </section>

        <section id="skills" className="">
          <StackedCardsMotion />
        </section>

        <section id="stationshortcuts" className="">
          <StationShortcuts />
        </section>

        <section id="roadmap" className="">
          <StationRoadMap />
        </section>
      </main>
    </div>
  );
}
