import Game from "./(home)/Game";
import Intro from "./(home)/Intro";
import TheOrigins from "./(home)/TheOrigins";

export default function Home() {
  return (
    <div>
      <Intro />

      <TheOrigins />

      <Game />

      {/* <div className="bg-red-400 h-[2000px] w-full"></div> */}
    </div>
  );
}
