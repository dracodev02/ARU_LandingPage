"use client";
import Marquee from "react-fast-marquee";
import { Speed } from "../MarqueeBg";

const MarqueeLayerFar = () => {
  const items = [
    <Marquee speed={Speed.FAST}>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
      <div className="w-screen"></div>
      <div className="w-screen"></div>
      <div className="w-screen"></div>
      <div className="w-screen"></div>
      <div className="w-screen"></div>
    </Marquee>,
    <Marquee speed={Speed.MEDIUM}>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
    </Marquee>,

    <Marquee speed={Speed.FAST}>
      <h1
        className="marquee-item text-gray-800 text-xl"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
    </Marquee>,
    <Marquee speed={Speed.VERYFAST}>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
    </Marquee>,

    <Marquee speed={Speed.FAST}>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
    </Marquee>,
    <Marquee speed={Speed.VERYFAST}>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
    </Marquee>,

    <Marquee speed={Speed.FAST}>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Fully on-chain game on abstract
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Fully on-chain game on abstract
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Fully on-chain game on abstract
      </h1>
    </Marquee>,
    <Marquee speed={Speed.VERYFAST}>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Fully on-chain game on abstract
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Fully on-chain game on abstract
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Fully on-chain game on abstract
      </h1>
    </Marquee>,

    <Marquee speed={Speed.FAST}>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
    </Marquee>,
    <Marquee speed={Speed.MEDIUM}>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
    </Marquee>,
    <Marquee speed={Speed.VERYFAST}>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
    </Marquee>,

    <Marquee speed={Speed.SLOW}>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
    </Marquee>,
    <Marquee speed={Speed.FAST}>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
    </Marquee>,
    <Marquee speed={Speed.VERYFAST}>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
    </Marquee>,

    <Marquee speed={Speed.SLOW}>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
      <div className="w-screen"></div>
      <h1
        className="marquee-item text-gray-800 text-xl font-bold"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
    </Marquee>,
    <Marquee speed={Speed.FAST}>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>

      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
      <h1
        className="marquee-item text-gray-800 text-xl text-small"
        style={{ textShadow: "1px 1px #FFFFFF80", fontWeight: "bold" }}
      >
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
    </Marquee>,
  ];

  return (
    <div className="flex flex-col gap-10 justify-between">
      {items
        .sort(() => 0.5 - Math.random())
        .map((item, index) => (
          <div key={index}>{item}</div>
        ))}
    </div>
  );
};

export default MarqueeLayerFar;
