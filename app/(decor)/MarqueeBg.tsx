import MarqueeLayerFar from "./MarqeeItems/MarqueeLayerFar";
import MarqueeLayerMedium from "./MarqeeItems/MarqueeLayerMedium";
import MarqueeLayerNear from "./MarqeeItems/MarqueeLayerNear";

export enum Speed {
  SLOW = 60,
  MEDIUM = 80,
  FAST = 100,
  VERYFAST = 200,
  SUPERFAST = 350,
}

const MarqueeBg = () => {
  return (
    <div className="pointer-events-none overflow-hidden">
      <div className="fixed z-[-5] w-full h-full top-0 left-0">
        <MarqueeLayerFar />
      </div>
      <div className="fixed z-[-4] w-full h-full top-0 left-0">
        <MarqueeLayerMedium />
      </div>
      <div className="fixed z-10 w-full h-full top-0 left-0">
        <MarqueeLayerNear />
      </div>
    </div>
  );
};

export default MarqueeBg;
