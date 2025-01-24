"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import arrowPixel from "@/public/assets/arrowpixel.svg";
import characterMan from "@/public/assets/character-man.png";
import characterWomen from "@/public/assets/character-women.png";
import base from "@/public/assets/base.png";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Game = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const textGame = document.getElementById("text-game");
    const subtext1 = document.getElementById("subtext1");
    const subtext2 = document.getElementById("subtext2");

    if (textGame && subtext1 && subtext2) {
      gsap.to(subtext1, {
        x: "-10em",
        opacity: 0,
      });

      gsap.to(subtext2, {
        x: "10em",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textGame,
          start: "top top",
          end: "+=" + textGame?.offsetHeight,
        },
      });
      tl.to(textGame, {
        y: () => +(textGame.offsetHeight * 0.1),
        ease: "none",
        scrollTrigger: {
          trigger: textGame,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(
        subtext1,
        {
          x: 0,
          opacity: 1,
          ease: "power1.in",
        },
        0.1
      );

      tl.to(
        subtext2,
        {
          x: 0,
          opacity: 1,
          ease: "power1.in",
        },
        1
      );
    }
  });

  return (
    <div className="relative pt-[2em]">
      <div className="w-full py-2 bg-[#34FF7B]">
        <Marquee className="uppercase">
          <div className="mx-6">
            <h1 className="text-[36px] text-black">Build on Abstract</h1>
          </div>
          <div className="mx-6">
            <Image
              src={arrowPixel.src}
              alt="arrowPixel"
              width={48}
              height={48}
              className="h-full aspect-square"
            />
          </div>
          <div className="mx-6">
            <h1 className="text-[36px] text-black italic font-medium">
              Pixelated Open-World
            </h1>
          </div>
          <div className="mx-6">
            <Image
              src={arrowPixel.src}
              alt="arrowPixel"
              width={48}
              height={48}
              className="h-full aspect-square"
            />
          </div>
          <div className="mx-6">
            <h1 className="text-[36px] text-black">Build on Abstract</h1>
          </div>
          <div className="mx-6">
            <Image
              src={arrowPixel.src}
              alt="arrowPixel"
              width={48}
              height={48}
              className="h-full aspect-square"
            />
          </div>

          <div className="mx-6">
            <h1 className="text-[36px] text-black italic font-medium">
              Pixelated Open-World
            </h1>
          </div>
          <div className="mx-6">
            <Image
              src={arrowPixel.src}
              alt="arrowPixel"
              width={48}
              height={48}
              className="h-full aspect-square"
            />
          </div>
          <div className="mx-6">
            <h1 className="text-[36px] text-black">Build on Abstract</h1>
          </div>

          <div className="mx-6">
            <Image
              src={arrowPixel.src}
              alt="arrowPixel"
              width={48}
              height={48}
              className="h-full aspect-square"
            />
          </div>
          <div className="mx-6">
            <h1 className="text-[36px] text-black italic font-medium">
              Pixelated Open-World
            </h1>
          </div>
          <div className="mx-6">
            <Image
              src={arrowPixel.src}
              alt="arrowPixel"
              width={48}
              height={48}
              className="h-full aspect-square"
            />
          </div>
        </Marquee>
      </div>
      <div id="text-game">
        <p
          id="subtext1"
          className="uppercase absolute top-[20em] left-[10em] text-end"
        >
          the supreme fully on-chain game <br /> on abstract
        </p>
        <p
          id="subtext2"
          className="uppercase absolute  right-[2em] text-end top-[75em]"
        >
          the best consumer layer for daily activities abstract
        </p>
        <p className="verticalText relative left-1/2 -translate-x-1/2 text-[20em] italic top-[0em] py-[1em]">
          GAME
        </p>
      </div>
      <div>
        <Image
          className="absolute right-[-3em] w-[40em] top-[0em] z-[1]"
          src={characterMan.src}
          alt="characterMan"
          width={1000}
          height={1000}
        />
        <Image
          className="absolute left-[-5em] w-[40em] top-[50em] z-[1]"
          src={characterWomen.src}
          alt="characterMan"
          width={1000}
          height={1000}
        />
        <Image
          className="absolute left-[2em] w-[70em] top-[100em]"
          src={base.src}
          alt="base"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Game;
