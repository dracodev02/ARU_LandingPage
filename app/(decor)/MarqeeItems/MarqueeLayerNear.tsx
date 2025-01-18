"use client";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Speed } from "../MarqueeBg";

const MarqueeLayerNear = () => {
  const [currentLoop, setCurrentLoop] = useState(0);

  const items = [
    // <Marquee key={1} loop={1} speed={Speed.SUPERFAST * (Math.random() + 1)}>
    //   <div className="w-screen"></div>
    //   <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
    //     Abstract ✳️ Abstract ✳️ Abstract
    //   </h1>
    //   <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
    //     Abstract ✳️ Abstract ✳️ Abstract
    //   </h1>
    //   <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
    //     Abstract ✳️ Abstract ✳️ Abstract
    //   </h1>
    // </Marquee>,

    <Marquee key={2} loop={1} speed={Speed.SUPERFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-mask bg-text-4 text-[35px] font-extrabold">
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
      <h1 className="marquee-item text-mask bg-text-4 text-[35px] font-extrabold">
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
      <h1 className="marquee-item text-mask bg-text-4 text-[35px] font-extrabold">
        Aru Kabu ruyui moonsheep finalbosu cannasapiens ghosts lupo
      </h1>
    </Marquee>,

    <Marquee key={3} loop={1} speed={Speed.SUPERFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
      <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
      <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
        🛡️ Dungeon 🌾 Farm ⚔️ craft
      </h1>
    </Marquee>,

    <Marquee key={4} loop={1} speed={Speed.SUPERFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
        Fully on-chain game on abstract
      </h1>
      <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
        Fully on-chain game on abstract
      </h1>
      <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
        Fully on-chain game on abstract
      </h1>
    </Marquee>,

    <Marquee key={5} loop={1} speed={Speed.SUPERFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#34FF7B] text-[35px] font-extrabold">
        Fully on-chain game on abstract
      </h1>
      <h1 className="marquee-item text-[#34FF7B] text-[35px] font-extrabold">
        Fully on-chain game on abstract
      </h1>
      <h1 className="marquee-item text-[#34FF7B] text-[35px] font-extrabold">
        Fully on-chain game on abstract
      </h1>
    </Marquee>,

    // <Marquee key={6} loop={1} speed={Speed.SUPERFAST * (Math.random() + 1)}>
    //   <div className="w-screen"></div>
    //   <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
    //     🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
    //   </h1>
    //   <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
    //     🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
    //   </h1>
    //   <h1 className="marquee-item text-[#989898] text-[35px] font-extrabold">
    //     🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
    //   </h1>
    // </Marquee>,

    <Marquee key={7} loop={1} speed={Speed.SUPERFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-[#FF5DC9] text-[35px] font-extrabold">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1 className="marquee-item text-[#FF5DC9] text-[35px] font-extrabold">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
      <h1 className="marquee-item text-[#FF5DC9] text-[35px] font-extrabold">
        🐧 pudgy penguin 🌈 Doodles ⛩️ Azuki 🦕 Claynosaurz 🦭 Sappy seals
      </h1>
    </Marquee>,

    <Marquee key={8} loop={1} speed={Speed.SUPERFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-mask text-[35px] bg-text-1 font-extrabold">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <h1 className="marquee-item text-mask text-[35px] bg-text-1 font-extrabold">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
      <h1 className="marquee-item text-mask text-[35px] bg-text-1 font-extrabold">
        Shibuya渋谷Shibuya渋谷Shibuya渋谷Shibuya渋谷
      </h1>
    </Marquee>,

    <Marquee key={9} loop={1} speed={Speed.SUPERFAST * (Math.random() + 1)}>
      <div className="w-screen"></div>
      <h1 className="marquee-item text-mask bg-text-2 text-[35px] font-extrabold">
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
      <h1 className="marquee-item text-mask bg-text-2 text-[35px] font-extrabold">
        Tokyo東京Tokyo東京Tokyo東京Tokyo東京Tokyo東京
      </h1>
      <h1 className="marquee-item text-mask bg-text-2 text-[35px] font-extrabold">
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
    <div className="flex justify-around h-full flex-col">
      {items
        .sort(() => 0.5 - Math.random()) // Trộn ngẫu nhiên các marquee
        .map((item, index) => (
          <div key={`${currentLoop}-${index}`}>{item}</div>
        ))}
    </div>
  );
};

export default MarqueeLayerNear;
