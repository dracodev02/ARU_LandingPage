"use client";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Speed } from "../MarqueeBg";

const MarqueeLayerMedium = () => {
  const [currentLoop, setCurrentLoop] = useState(0);

  const items = [
    <Marquee key={1} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#26CD35] font-extrabold">
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
      <h1 className="marquee-item text-[#26CD35] font-extrabold">
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
      <h1 className="marquee-item text-[#26CD35] font-extrabold">
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
    </Marquee>,
    <Marquee key={2} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#989898] text-small">
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
      <h1 className="marquee-item text-[#989898] text-small">
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
      <h1 className="marquee-item text-[#989898] text-small">
        Abstract ✳️ Abstract ✳️ Abstract
      </h1>
    </Marquee>,
    <Marquee key={3} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#989898]">
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
      <h1 className="marquee-item text-[#989898]">
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
      <h1 className="marquee-item text-[#989898]">
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
    </Marquee>,
    <Marquee key={4} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-mask bg-text-4 text-small">
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
      <h1 className="marquee-item text-mask bg-text-4 text-small">
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
      <h1 className="marquee-item text-mask bg-text-4 text-small">
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
    </Marquee>,
    <Marquee key={5} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
    </Marquee>,
    <Marquee key={6} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-mask bg-text-4 text-small">
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
      <h1 className="marquee-item text-mask bg-text-4 text-small">
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
      <h1 className="marquee-item text-mask bg-text-4 text-small">
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
    </Marquee>,
    <Marquee key={7} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        Fully on-chain game on abstract
      </h1>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        Fully on-chain game on abstract
      </h1>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        Fully on-chain game on abstract
      </h1>
    </Marquee>,
    <Marquee key={8} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#34FF7B] font-extrabold">
        Fully on-chain game on abstract
      </h1>
      <h1 className="marquee-item text-[#34FF7B] font-extrabold">
        Fully on-chain game on abstract
      </h1>
      <h1 className="marquee-item text-[#34FF7B] font-extrabold">
        Fully on-chain game on abstract
      </h1>
    </Marquee>,
    <Marquee key={9} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
    </Marquee>,
    <Marquee key={10} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#FF5DC9] text-small">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1 className="marquee-item text-[#FF5DC9] text-small">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1 className="marquee-item text-[#FF5DC9] text-small">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
    </Marquee>,
    <Marquee key={11} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#34FF7B] font-extrabold">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1 className="marquee-item text-[#34FF7B] font-extrabold">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1 className="marquee-item text-[#34FF7B] font-extrabold">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
    </Marquee>,
    <Marquee key={12} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-mask bg-text-1 text-small">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <h1 className="marquee-item text-mask bg-text-1 text-small">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <h1 className="marquee-item text-mask bg-text-1 text-small">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
    </Marquee>,
    <Marquee key={13} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#58F1F4] font-extrabold">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <h1 className="marquee-item text-[#58F1F4] font-extrabold">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <h1 className="marquee-item text-[#58F1F4] font-extrabold">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
    </Marquee>,
    <Marquee key={14} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <h1 className="marquee-item text-[#989898] font-extrabold">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
    </Marquee>,
    <Marquee key={15} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#F4585A] font-extrabold">
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
      <h1 className="marquee-item text-[#F4585A] font-extrabold">
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
      <h1 className="marquee-item text-[#F4585A] font-extrabold">
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
    </Marquee>,
    <Marquee key={16} loop={1} speed={Speed.VERYFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-mask bg-text-2 text-small">
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
      <h1 className="marquee-item text-mask bg-text-2 text-small">
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
      <h1 className="marquee-item text-mask bg-text-2 text-small">
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
    </Marquee>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLoop((prev) => prev + 1);
    }, 60000); // 40 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="absolute w-full top-0 left-0 flex justify-evenly h-full flex-col">
        {items
          .sort(() => 0.5 - Math.random()) // Trộn ngẫu nhiên các marquee
          .map((item, index) => (
            <div className="text-xl" key={`${currentLoop}-${index}`}>
              {item}
            </div>
          ))}
      </div>
      <div className="absolute w-full top-1/2 -translate-y-2/3 left-0 flex justify-around h-1/2 flex-col">
        {items
          .sort(() => 0.5 - Math.random()) // Trộn ngẫu nhiên các marquee
          .map((item, index) => (
            <div className="text-2xl" key={`${currentLoop}-${index}`}>
              {item}
            </div>
          ))}
      </div>
      <div className="absolute w-full top-1/2 -translate-y-1/3 left-0 flex justify-around h-1/2 flex-col">
        {items
          .sort(() => 0.5 - Math.random()) // Trộn ngẫu nhiên các marquee
          .map((item, index) => (
            <div className="text-2xl" key={`${currentLoop}-${index}`}>
              {item}
            </div>
          ))}
      </div>
    </>
  );
};

export default MarqueeLayerMedium;
